// removeAllPeople.mjs

export async function removeAllPeople(
  teaPreferences,
  isSpinning,
  updatePreferencesList,
  updateNameWheel,
  showError
) {
  // TODO: Exit the function if the wheel is spinning
  if (isSpinning) return;

  // TODO: Confirm if the user really wants to remove all preferences
  if (!confirm("Are you sure you want to remove all people?")) return;

  try {
    // TODO: Send a DELETE request to remove all preferences on the server
    const response = await fetch("api/preferences", {
      method: "DELETE",
    });

    if (response.ok) {
      // TODO: Clear the local teaPreferences array
      teaPreferences.length = 0;

      // TODO: Update the name wheel UI to reflect empty preferences
      updateNameWheel(teaPreferences);

      // TODO: Update the preferences list in the UI
      updatePreferencesList();

      // TODO: Reset the display elements for the selected person and their preferences
      document.getElementById("selectedPerson").textContent =
        "Nobody selected yet";
      document.getElementById("preferenceDisplay").textContent = "";
    } else {
      // TODO: Log error and show error message if response is unsuccessful
      console.error("Error response:", response);
      showError("Error removing all people");
    }
  } catch (error) {
    // TODO: Log error and display error message if the fetch request fails
    console.error("Error removing all people:", error);
    showError("Error removing all people");
  }
}
