// showError.mjs
export function showError(message) {
  // TODO: Create a new div element for the toast container
  const toastContainer = document.createElement("div");
  toastContainer.className =
    "toast-container position-fixed bottom-0 end-0 p-3"; // TODO: Set classes to position the toast at the bottom right of the screen

  // TODO: Set the inner HTML of the toast container with the error message and button to dismiss
  toastContainer.innerHTML = `
      <div class="toast align-items-center text-white bg-danger border-0" role="alert">
          <div class="d-flex">
              <div class="toast-body">
                  ${message} // TODO: Display the error message passed to the function
              </div>
              <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
          </div>
      </div>
  `;

  // TODO: Append the toast container to the body of the document
  document.body.appendChild(toastContainer);

  // TODO: Create a new Bootstrap toast instance from the toast element in the container
  const toast = new bootstrap.Toast(toastContainer.querySelector(".toast"));

  // TODO: Show the toast notification
  toast.show();

  // TODO: Add an event listener to remove the toast container from the DOM when it is hidden
  toastContainer.addEventListener("hidden.bs.toast", () => {
    toastContainer.remove(); // TODO: Clean up by removing the toast from the document
  });
}
