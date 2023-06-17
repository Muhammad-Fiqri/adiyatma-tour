import "../css/LoginPage.scss";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {

    const navigate = useNavigate();

    const login = (event) => {
        event.preventDefault();
        console.log("login");
        navigate("/Dashboard");
    }

    return(
        <div className="LoginPage-wrapper">
            <h1 className="title">
                <img src="/assets/adiyatma-logo-with-text.svg"></img>
            </h1>
            <form className="form-signin" onSubmit={login}>

                <div className="form-title-wrapper">
                    <p className="form-title">Sign In</p>
                </div>

                <div className="input-username-wrapper">
                    <label htmlFor="username_or_email" >Username or Email Address</label>
                    <input type="text" placeholder="example@email.com" name="username_or_email"></input>
                </div>

                <div className="input-password-wrapper">
                    <label htmlFor="pass_word">Password</label>
                    <input type="password" placeholder="1234565" name="pass_word"></input>
                </div>

                <div className="bottom-form">
                    <input type="checkbox" name="keep_logged_in"></input>
                    <label htmlFor="keep_logged_in">Keep me logged in</label>
                    <Link to='/ForgotPassword'>Forgot Password?</Link>
                </div>

                <button type="submit">Sign In</button>
            </form>
        </div>
    );
}

export default LoginPage;