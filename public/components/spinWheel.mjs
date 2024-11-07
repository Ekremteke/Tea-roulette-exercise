// spinWheel.mjs
export function spinWheel(teaPreferences, wheel, setSelectedPerson) {
  // TODO: Calculate the angle for each slice of the wheel based on the number of preferences
  const sliceAngle = 360 / teaPreferences.length;

  // TODO: Select a random index to determine which tea preference is the winner
  const randomId = Math.floor(Math.random() * teaPreferences.length);

  // TODO: Reset the wheel's position first to start the animation from the beginning
  wheel.style.transition = "none"; // Disable transitions for immediate effect
  wheel.style.transform = "rotate(0deg)"; // Rotate the wheel back to the starting position

  // TODO: Force a reflow to ensure the style changes take effect before the animation
  void wheel.offsetHeight; // Triggering a reflow to reset the animation state

  // TODO: Set parameters for the spin animation
  const spinRotations = 6; // Number of full rotations to complete before landing
  const baseRotation = spinRotations * 360; // Total degrees for the full rotations
  // TODO: Calculate the position for the target slice based on the random ID selected
  const targetSlicePosition = -1 * (randomId * sliceAngle) + 90; // Adjusting for the wheel's angle
  // TODO: Calculate the final rotation value for the wheel
  const finalRotation = baseRotation + targetSlicePosition; // Total degrees to rotate

  // TODO: Start the spin with the CSS transition using requestAnimationFrame for smoother animation
  requestAnimationFrame(() => {
    wheel.style.transition = ""; // Restore the CSS transition property to enable smooth rotation
    // TODO: Apply the final rotation value to the wheel's transform style
    wheel.style.transform = `rotate(${finalRotation}deg)`; // Rotate the wheel to the calculated position
  });

  // TODO: Set a timeout to determine the winner after the spin animation completes
  setTimeout(() => {
    const winner = teaPreferences[randomId]; // Get the winning tea preference
    setSelectedPerson(winner); // Call the callback function to update the selected person
  }, 3000); // 3000 milliseconds delay matches the duration of the spin animation
}
