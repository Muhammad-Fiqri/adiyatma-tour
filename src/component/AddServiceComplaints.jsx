import "../css/AddServiceComplaints.scss";

function AddServiceComplaints() {
    return(
        <div className="AddServiceComplaints-wrapper">
            <div className="form-header">
                <h2>Keluhan Layanan</h2>
            </div>
            <div className="form-body">
                <div className="input-wrapper" id="nama-wrapper">
                    <label htmlFor="nama">Nama *</label>
                    <input type="text" name="nama" id="" required/>
                </div>
                <div className="input-wrapper" id="no_hp-wrapper">
                    <label htmlFor="no_hp">No. Handphone *</label>
                    <input type="text" name="no_hp" id="" required/>
                </div>
                <div className="input-wrapper" id="date-wrapper">
                    <label htmlFor="date">Tanggal *</label>
                    <input type="date" name="date" id="" required/>
                </div>
                <div className="input-wrapper" id="email-wrapper">
                    <label htmlFor="email">Email *</label>
                    <input type="text" name="email" id="" required/>
                </div>
                <div className="input-wrapper" id="keluhan_layanan-wrapper">
                    <label htmlFor="keluhan_layanan">Keluhan Layanan *</label>
                    <textarea name="keluhan_layanan" id="" required></textarea>
                </div>
            </div>
            <div className="button-wrapper">
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>
        </div>
    );
}

export default AddServiceComplaints;