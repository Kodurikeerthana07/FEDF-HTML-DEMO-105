export function saveData() {
  localStorage.setItem("info", document.getElementById("dataInput").value);
}
export function loadData() {
  document.getElementById("stored").innerText = localStorage.getItem("info");
}
window.saveData = saveData;
window.loadData = loadData;