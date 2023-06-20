import "../css/AddAccount.scss";

function AddAccount() {
    return(
        <div className="AddAccount-wrapper">
            <div className="form-header">
                <h2>Add Account</h2>
            </div>
            <div className="form-body">
                <div className="input-wrapper">
                    <label htmlFor="role">Role</label>
                    <select name="role" id="">
                        <option value="Admin">Admin</option>
                        <option value="Agent - Marketing Agent">Agent - Marketing Agent</option>
                        <option value="Validator - Marketing Agent Officer">Validator - Marketing Agent Officer</option>
                        <option value="Approval - Marketing Supervisor">Approval - Marketing Supervisor</option>
                    </select>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="nama">Nama *</label>
                    <input type="text" name="nama" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="tempat_tanggal_lahir">Tempat / Tanggal Lahir *</label>
                    <input type="text" name="tempat_tanggal_lahir" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="no_hp">No. Handphone *</label>
                    <input type="text" name="no_hp" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="email">Email *</label>
                    <input type="text" name="email" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="alamat">Alamat Lengkap *</label>
                    <input type="text" name="alamat" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="nama_bank">Nama Bank</label>
                    <input type="text" name="nama_bank"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="no_rek">No. Rekening</label>
                    <input type="text" name="no_rek"/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="nama_MAO">Nama Marketing Agent Officer *</label>
                    <select name="nama_MAO" id="" required></select>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="nama_MS">Nama Marketing Supervisor *</label>
                    <select name="nama_MS" id="" required></select>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="pw">Password *</label>
                    <input type="password" name="pw" required/>
                </div>
                <div className="input-wrapper">
                    <label htmlFor="status">Status *</label>
                    <select name="status" id="" required>
                        <option value="aktif">Aktif</option>
                        <option value="tdk-aktif">Tidak Aktif</option>
                    </select>
                </div>
            </div>
            <div className="form-footer">
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>
        </div>

    );
}

export default AddAccount;