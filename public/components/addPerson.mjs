export async function addPerson(
  teaPreferences,
  newPerson,
  modal,
  updatePreferencesList,
  updateNameWheel,
  showError
) {
  try {
    // TODO: Send a POST request to the server to add a new person with their preferences
    const response = await fetch("/api/preferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    });

    // TODO: Check if the response is successful. If successful, add the new person to the teaPreferences array
    if (response.ok) {
      // Add new person to the local array
      teaPreferences.push(newPerson);

      // TODO: Update the name wheel and the preferences list in the UI
      updateNameWheel(teaPreferences);
      updatePreferencesList(teaPreferences); // Pass the updated preferences to refresh the UI

      // TODO: Hide the modal and reset the add person form
      modal.hide();
      document.getElementById("addPersonForm").reset();
      console.log(teaPreferences);
    } else {
      // TODO: If there is an error in the response, log it and show an error message
      console.error("Error response:", response);
      showError("Error adding person");
    }
  } catch (error) {
    // TODO: Catch any errors during the fetch request and display an error message
    console.error("Error adding person:", error);
    showError("Error adding person");
  }
}
