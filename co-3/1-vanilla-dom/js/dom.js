export function changeTitle() {
  document.getElementById("title").innerText = "Title Updated via DOM!";
}
window.changeTitle = changeTitle;