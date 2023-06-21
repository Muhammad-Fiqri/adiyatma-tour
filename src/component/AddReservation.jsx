import { useState, useEffect } from "react";
import $ from 'jquery';
import "../css/AddReservation.scss";

function AddReservation(props) {
    const [current_category,set_current_category] = useState("Tour")

    const change_category_type = (e) => {
        set_current_category(e.target.value)
    }

    useEffect(() => {
        console.log(current_category);
        switch(current_category) 
        {
            case "Tour":
                $(".kode-unik-wrapper").hide();
                $(".down-payment-wrapper").show();
                $(".jumlah-pembayaran-wrapper").hide();
                $(".sisa-pembayaran-wrapper").show();
                break;

            case "Act_&_Eve":
                $(".kode-unik-wrapper").show();
                $(".kode-unik-wrapper").css("display","grid");
                $(".down-payment-wrapper").hide();
                $(".jumlah-pembayaran-wrapper").show();
                $(".sisa-pembayaran-wrapper").hide();
                break;

            case "Rent":
                $(".kode-unik-wrapper").show();
                $(".kode-unik-wrapper").css("display","grid");
                $(".down-payment-wrapper").hide();
                $(".jumlah-pembayaran-wrapper").show();
                $(".sisa-pembayaran-wrapper").hide();
                break;
        }
    })

    return(
        <div className="AddReservation-wrapper">
            <div className="form-header">
                <h2>Add Reservasi</h2>
                <p>Form Informasi Reservasi</p>
            </div>
            <div className="form-body">
                <div className="kategori-wrapper">
                    <label htmlFor="kategori">Kategori</label>
                    <select name="kategori" onChange={change_category_type}>
                        <option value={"Tour"}>Tour</option>
                        <option value={"Act_&_Eve"}>Activity & Event</option>
                        <option value={"Rent"}>Rent</option>
                    </select>
                </div>
                <div className="ID_pemesanan-wrapper">
                    <label htmlFor="ID_pemesanan">ID Pemesanan *</label>
                    <input required type="text" name="ID_pemesanan"></input>
                </div>
                <div className="tgl_pemesanan-wrapper">
                    <label htmlFor="tgl_pemesanan">Tanggal Pemesanan *</label>
                    <input required type="date" name="tgl_pemesanan" autoComplete="off"></input>
                </div>
                <div className="nama_pemesan-wrapper">
                    <label htmlFor="nama_pemesanan">Nama Pemesan *</label>
                    <input required type="text" name="nama_pemesanan" placeholder="Smith & Partners"></input>
                </div>
                <div className="no_hp-wrapper">
                    <label htmlFor="no_hp">No. Handphone *</label>
                    <input required type="text" name="no_hp" placeholder="+62"></input>
                </div>
                <div className="waktu_pemesanan-wrapper">
                    <label htmlFor="waktu_pemesanan">Waktu Pemesanan *</label>
                    <input required type="text" name="waktu_pemesanan" autoComplete="off"></input>
                </div>
                <div className="email-wrapper">
                    <label htmlFor="email">Email *</label>
                    <input required type="text" name="email" placeholder="exam@gmail.com"></input>
                </div>
                <div className="pilihan-produk-wrapper">
                    <label htmlFor="pilihan_produk">Pilihan Produk</label>
                    <input required type="text" name="pilihan_produk"></input>
                    <button id="lihat" onClick={() => {props.setCurrentMenu("Choose Product")}}>Lihat</button>
                </div>
                <div className="jumlah-wrapper">
                    <label htmlFor="jumlah">Jumlah</label>
                    <input required type="text" name="jumlah"></input>
                </div>
                <div className="harga-satuan-wrapper">
                    <label htmlFor="harga_satuan">Harga Satuan</label>
                    <input required type="text" name="harga_satuan" autoComplete="off"></input>
                </div>
                <div className="harga-total-wrapper">
                    <label htmlFor="harga_total">Harga total</label>
                    <input required type="text" name="harga_total" autoComplete="off"></input>
                </div>
                <div className="down-payment-wrapper">
                    <label htmlFor="down_payment">Down Payment</label>
                    <input required type="text" name="down_payment"></input>
                    <div className="button-wrapper">
                        <button>Upload Bukti
                            <img src="./assets/upload-icon.svg" alt="" />
                        </button>
                        <button>Preview
                            <img src="./assets/preview-icon.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="kode-unik-wrapper">
                    <label htmlFor="kode_unik">Kode Unik</label>
                    <input type="text" name="kode_unik" autoComplete="off"></input>
                </div>
                <div className="sisa-pembayaran-wrapper">
                    <label htmlFor="sisa_pembayaran">Sisa Pembayaran</label>
                    <input required type="text" name="sisa_pembayaran"></input>
                    <div className="button-wrapper">
                        <button>Upload Bukti
                            <img src="./assets/upload-icon.svg" alt="" />
                        </button>
                        <button>Preview
                            <img src="./assets/preview-icon.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className="jumlah-pembayaran-wrapper">
                    <label htmlFor="jumlah_pembayaran">Jumlah Pembayaran</label>
                    <input required type="text" name="jumlah_pembayaran"></input>
                    <div className="button-wrapper">
                        <button>Upload Bukti
                            <img src="./assets/upload-icon.svg" alt="" />
                        </button>
                        <button>Preview
                            <img src="./assets/preview-icon.svg" alt="" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="form-submit-wrapper">
                <button id="cancel">Cancel</button>
                <button id="save">Save</button>
            </div>
        </div>
    );
}

export default AddReservation;