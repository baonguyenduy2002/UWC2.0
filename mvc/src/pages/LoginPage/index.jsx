import React from "react";

import login_background from "../../assets/image/login_background.svg"
import "./LoginPage.css";

function LoginPage() {
	return (
	<div className="container">
		<h1>Sign in</h1>
		<p>Sign in and start managing your employee!</p>
		<form className="form">
  			<input type="text" id="fname" name="fname" placeholder="User ID"/>
  			<input type="text" id="lname" name="lname" placeholder="Password"/>
			<div>
				<input type="checkbox" />
				<p>Remember me</p>
			</div>
  			<button>Login</button>
		</form>
		<img src= {login_background} alt="Login Background" className="login_background"/>
	</div>
	);
}

export default LoginPage;
