import { useCallback, useState } from "react";


export function useSliderWithInput({
  minValue = 0,
  maxValue = 100,
  initialValue = [minValue],
  defaultValue = [minValue],
}) {
  const [sliderValue, setSliderValue] = useState(initialValue);
  const [inputValues, setInputValues] = useState(initialValue.map((v) => v.toString()));

  const validateAndUpdateValue = useCallback(
    (rawValue, index) => {
      if (rawValue === "" || rawValue === "-") {
        const newInputValues = [...inputValues];
        newInputValues[index] = "0";
        setInputValues(newInputValues);

        const newSliderValues = [...sliderValue];
        newSliderValues[index] = 0;
        setSliderValue(newSliderValues);
        return;
      }

      const numValue = parseFloat(rawValue);

      if (isNaN(numValue)) {
        const newInputValues = [...inputValues];
        newInputValues[index] = sliderValue[index].toString();
        setInputValues(newInputValues);
        return;
      }

      let clampedValue = Math.min(maxValue, Math.max(minValue, numValue));

      if (sliderValue.length > 1) {
        if (index === 0) {
          clampedValue = Math.min(clampedValue, sliderValue[1]);
        } else {
          clampedValue = Math.max(clampedValue, sliderValue[0]);
        }
      }

      const newSliderValues = [...sliderValue];
      newSliderValues[index] = clampedValue;
      setSliderValue(newSliderValues);

      const newInputValues = [...inputValues];
      newInputValues[index] = clampedValue.toString();
      setInputValues(newInputValues);
    },
    [sliderValue, inputValues, minValue, maxValue],
  );

  const handleInputChange = useCallback(
    (e, index) => {
      const newValue = e.target.value;
      if (newValue === "" || /^-?\d*\.?\d*$/.test(newValue)) {
        const newInputValues = [...inputValues];
        newInputValues[index] = newValue;
        setInputValues(newInputValues);
      }
    },
    [inputValues],
  );

  const handleSliderChange = useCallback((newValue) => {
    setSliderValue(newValue);
    setInputValues(newValue.map((v) => v.toString()));
  }, []);

  const resetToDefault = useCallback(() => {
    setSliderValue(defaultValue);
    setInputValues(defaultValue.map((v) => v.toString()));
  }, [defaultValue]);

  return {
    sliderValue,
    inputValues,
    validateAndUpdateValue,
    handleInputChange,
    handleSliderChange,
    resetToDefault,
  };
}