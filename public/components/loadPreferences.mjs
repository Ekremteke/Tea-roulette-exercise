// loadPreferences.mjs
export async function loadPreferences(
  teaPreferences,
  showError,
  updatePreferencesList
) {
  try {
    // TODO: Send a GET request to the server to load tea preferences
    const response = await fetch("/api/preferences");

    // TODO: Check if the response is successful; throw an error if it's not
    if (!response.ok) {
      throw new Error("Failed to load preferences");
    }

    // TODO: Parse the JSON response data
    const data = await response.json();

    // TODO: Clear the existing teaPreferences array and add the new data
    teaPreferences.splice(0, teaPreferences.length, ...data);

    // TODO: Update the preferences list in the UI with the newly loaded data
    updatePreferencesList(teaPreferences);
  } catch (error) {
    // TODO: Catch any errors during the fetch request and display an error message
    console.error("Error loading preferences:", error);
    showError("Error loading preferences");
  }
}
