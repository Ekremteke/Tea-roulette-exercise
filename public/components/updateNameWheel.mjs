// updateNameWheel.mjs
export function updateNameWheel(teaPreferences) {
  // TODO: Get the wheel element from the DOM where the names will be displayed
  const wheel = document.getElementById("nameWheel");
  // TODO: Clear the current contents of the wheel to prepare for updates
  wheel.innerHTML = "";

  // TODO: Calculate the angle for each slice of the wheel based on the number of preferences
  const sliceAngle = 360 / teaPreferences.length;

  // TODO: Iterate over each person in the teaPreferences array to create name slices
  teaPreferences.forEach((person, id) => {
    // TODO: Create a new div element for each slice representing a name
    const slice = document.createElement("div");
    // TODO: Assign a class to the slice for styling purposes
    slice.className = "name-slice";

    // TODO: Set the rotation angle for this slice using a CSS custom property
    slice.style.setProperty("--slice-id", id * sliceAngle);
    // TODO: Set the text content of the slice to the person's name
    slice.textContent = person.name;
    // TODO: Append the slice to the wheel element to display it
    wheel.appendChild(slice);
  });
}
