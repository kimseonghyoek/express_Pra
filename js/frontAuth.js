const signin = document.getElementById('signin');
const signup = document.getElementById('signup');

const authUrl = 'localhost:3000/auth'

const goSignin = () => {
  console.log('test')
  location.href = `http://localhost:3000/auth/signin`;
}

const goSignup = () => {
  location.href = `http://localhost:3000/auth/signup`;
}

signin.onclick = goSignin;
signup.onclick = goSignup;