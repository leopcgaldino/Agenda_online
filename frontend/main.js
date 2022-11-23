import 'core-js/stable';
import 'regenerator-runtime/runtime';
import Login from './modules/Login';
import Register from './modules/Register'
// import './assets/css/style.css';

const login = new Login('.form-login');
const register = new Register('.form-register');

login.init();
register.init();