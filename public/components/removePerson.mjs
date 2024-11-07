// removePerson.mjs
export async function removePerson(
  teaPreferences,
  id,
  isSpinning,
  updatePreferencesList,
  updateNameWheel,
  showError
) {
  // TODO: Exit the function if the wheel is currently spinning
  if (isSpinning) return;

  try {
    // TODO: Send a DELETE request to the server to remove the person by their ID
    const response = await fetch(`/api/preferences/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // TODO: Remove the person from the local teaPreferences array using splice
      teaPreferences.splice(id, 1); // Remove item at index 'id'

      // TODO: Update the name wheel UI to reflect the current preferences
      updateNameWheel(teaPreferences);

      // TODO: Refresh the displayed preferences list in the UI
      updatePreferencesList();

      // TODO: Check if there are no preferences left and update the display accordingly
      if (teaPreferences.length === 0) {
        document.getElementById("selectedPerson").textContent =
          "Nobody selected yet";
        document.getElementById("preferenceDisplay").textContent = "";
      }
    } else {
      // TODO: Log the error response and show an error message if the removal fails
      console.error("Error response:", response);
      showError("Error removing person");
    }
  } catch (error) {
    // TODO: Log the error and display an error message if the fetch request fails
    console.error("Error removing person:", error);
    showError("Error removing person");
  }
}
