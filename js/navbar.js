const auth = document.getElementById('auth');

const authUrl = 'http://localhost:3000/auth'

const goAuth = () => {
  console.log("Success");
  location.href = authUrl;
}

auth.onclick = goAuth;