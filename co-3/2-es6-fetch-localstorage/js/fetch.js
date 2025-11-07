export function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json())
    .then(data => document.getElementById("post").innerText = JSON.stringify(data, null, 2));
}
window.loadPost = loadPost;