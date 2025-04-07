const slider = document.getElementById('tempSlider');
const tempDisplay = document.getElementById('tempValue');
slider.oninput = () => {
  tempDisplay.textContent = slider.value;
};
