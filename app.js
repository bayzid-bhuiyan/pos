// Example: Register
function register() {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const role = document.getElementById("regRole").value;

  fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password, role })
  })
  .then(res => res.text())
  .then(msg => {
    document.getElementById("regMsg").innerText = msg;
  });
}
