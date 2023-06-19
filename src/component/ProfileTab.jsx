import "../css/ProfileTab.scss";

function ProfileTab() {
    return(
        <div className="ProfileTab-wrapper">
            <div className="biodata-wrapper">
                <h2>Profil</h2>
                <div className="input-wrapper" id="nama-wrapper">
                    <label htmlFor="">Nama *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="no-hp-wrapper">
                    <label htmlFor="">No Handphone *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="email-wrapper">
                    <label htmlFor="">Email *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="nama-bank-wrapper">
                    <label htmlFor="">Nama Bank</label>
                    <input autocomplete="off" type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="marketing-agent-officer-wrapper">
                    <label htmlFor="">Marketing Agent Officer</label>
                    <input autocomplete="off" type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="alamat-lengkap-wrapper">
                    <label htmlFor="">Alamat Lengkap *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="NPWP-wrapper">
                    <label htmlFor="">NPWP</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="tmpt-tgl-lhr-wrapper">
                    <label htmlFor="">Tempat/Tanggal Lahir *</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="no-rek-wrapper">
                    <label htmlFor="">No. Rekening</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="marketing-supervisor-wrapper">
                    <label htmlFor="">Marketing Supervisor</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="ubah-pw-wrapper">
                <h2>Ubah Password</h2>
                <div className="input-wrapper" id="pw-wrapper">
                    <label htmlFor="">Password</label>
                    <input type="text" name="" id="" />
                </div>
                <div className="input-wrapper" id="confirm-pw-wrapper">
                    <label htmlFor="">Konfirmasi Password</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="submit-button">
                <button id="cancel-btn">Cancel</button>
                <button id="save-btn">Save</button>
            </div>
        </div>
    );
}

export default ProfileTab;