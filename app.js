// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js is connected and ready!');

  const button = document.querySelector('#myButton');
  const output = document.querySelector('#output');

  if (button && output) {
    button.addEventListener('click', () => {
      output.textContent = 'Button Sucked!';
    });
  }
});
