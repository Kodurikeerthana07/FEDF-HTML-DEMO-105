export function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");

  if (!name || !email) {
    error.innerText = "All fields are required!";
    return false;
  }
  error.innerText = "";
  return true;
}
window.validateForm = validateForm;