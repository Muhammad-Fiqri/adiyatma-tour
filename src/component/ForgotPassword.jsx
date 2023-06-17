import "../css/ForgotPassword.scss";
import {Link} from "react-router-dom";

function ForgotPassword()
{
    return (
        <div className="ForgotPassword-wrapper">
            <div className="title-logo-wrapper">
                <img src="/src/assets/adiyatma-logo-with-text.svg"/>
            </div>
            <form>
                <div className="form-title-wrapper">
                    <h2>Lupa Kata Sandi</h2>
                </div>
                <div className="user-or-email-input-wrapper">
                    <label htmlFor="user_or_email">Username or Email Address</label>
                    <input name="user_or_email" placeholder="example@email.com"/>
                </div>

                <div className="bottom-button-wrapper">
                    <button type="submit" name="send-link-change-password"><Link to="/ChangePassword">Kirim Link Ubah Kata Sandi</Link></button>
                    <button name="return"><Link to="/">Kembali</Link></button>
                </div>
            </form>
        </div>
    );
}

export default ForgotPassword;