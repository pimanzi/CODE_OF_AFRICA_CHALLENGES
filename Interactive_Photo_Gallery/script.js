/**
 This script dynamically updates the source of images based on the window width. If the window width is 789px or less, the script changes the image source to use a "small" version of the image.
 */

document.addEventListener('DOMContentLoaded', function () {
  /**
   * Updates the source of images based on the window width.
   * If the window width is 789px or less, it changes the image source to a "_small" version.
   */
  function updateImageSources() {
    // Array of image elements with their default source paths
    const images = [
      { id: 'fox-img', src: 'images/large/Fox.png' },
      { id: 'whale-img', src: 'images/large/whale.png' },
      { id: 'baboon-img', src: 'images/large/Baboon.png' },
      { id: 'deer-img', src: 'images/large/Deer.png' },
    ];

    // Get the current window width
    const windowWidth = window.innerWidth;

    // Iterate through each image element
    images.forEach((image) => {
      // Get the image element by its ID
      const imgElement = document.getElementById(image.id);

      // If window width is 789px or less, use the "_small" version of the image
      if (windowWidth <= 789) {
        imgElement.src = image.src.replace('large', 'small');
      } else {
        // else, use the default image
        imgElement.src = image.src;
      }
    });
  }

  // Update image sources when the page loads
  updateImageSources();

  // Add an event listener to update image sources when the window is resized
  window.addEventListener('resize', updateImageSources);
});
