import "../css/ChangePassword.scss";

function ChangePassword() {
    return(
        <div className="ChangePassword-wrapper">
            <div className="logo-title">
                <img src="./src/assets/adiyatma-logo-with-text.svg"/>
            </div>
            <form>
                <div className="form-title">
                    <h2>Lupa Kata Sandi</h2>
                </div>
                <div className="new-password">
                    <label htmlFor="new_password">Kata Sandi Baru</label>
                    <input type="password" name="new_password"/>
                </div>
                <div className="confirm-new-password">
                    <label htmlFor="confirm_new_password">Konfirmasi Kata Sandi Baru</label>
                    <input type="password" name="confirm_new_password"/>
                </div>
                <div className="change-password-button">
                    <button>Ubah Kata Sandi</button>
                </div>
            </form>
        </div>
    );
}

export default ChangePassword;