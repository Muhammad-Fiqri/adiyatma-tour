import { useEffect, useState } from "react";
import $ from 'jquery';
import "../css/AddProduct.scss";

function AddProduct() {
    const [current_category,set_current_category] = useState("Tour")

    const change_product_type = (e) => {
        set_current_category(e.target.value)
    }

    useEffect(() => {
        console.log(current_category);
        switch(current_category) 
        {
            case "Tour":
                $(".variabel_harga-wrapper").show();
                $(".stok_tiket_input-wrapper").hide();
                $(".status_input-wrapper").css("grid-row","5/6");
                break;

            case "Act_&_Eve":
                $(".variabel_harga-wrapper").hide();
                $(".stok_tiket_input-wrapper").show();
                $(".status_input-wrapper").css("grid-row","5/6");
                break;

            case "Rent":
                $(".variabel_harga-wrapper").hide();
                $(".stok_tiket_input-wrapper").hide();
                $(".status_input-wrapper").css("grid-row","4/5");
                break;
        }
    })

    return(
        <div className="AddProduct-wrapper">
            <h1>Add Produk</h1>
            <form>
                <div className="SKL_input-wrapper">
                    <label htmlFor="SKL_input">SKL *</label>
                    <input required type="text" name="SKL_input"></input>
                </div>
                <div className="kategori_produk-wrapper">
                    <label htmlFor="kategori_produk">Kategori Produk *</label>
                    <select onChange={change_product_type}>
                        <option value={"Tour"}>Tour</option>
                        <option value={"Act_&_Eve"}>Activity & Event</option>
                        <option value={"Rent"}>Rent</option>
                    </select>
                </div>
                <div className="harga_input-wrapper">
                    <label htmlFor="harga_input">Harga *</label>
                    <input required type="text" name="harga_input"></input>
                </div>
                <div className="stok_tiket_input-wrapper">
                    <label htmlFor="stok_tiket_input">Stok Tiket *</label>
                    <input required type="text" name="stok_tiket_input"></input>
                </div>
                <div className="variabel_harga-wrapper">
                    <p className="title-var-harga">Variable Harga</p>
                    <div className="var_harga_cb-wrapper">
                        <input type="checkbox" name="variabel_harga_cb"/>
                        <label htmlFor="variabel_harga_cb">Active</label>
                    </div>
                    <div id="min-qty-wrapper">
                        <div id="min-qty-up">
                            <input type="text" name="min_qty"/>
                            <label htmlFor="min_qty">MIN QTY</label>
                            <input type="text" name="potongan"/>
                            <label htmlFor="potongan">POTONGAN</label>
                            <button>+</button>
                            <button>-</button>
                        </div>
                        <div id="min-qty-down">
                            <input type="text" name="min_qty"/>
                            <label htmlFor="min_qty">MIN QTY</label>
                            <input type="text" name="potongan"/>
                            <label htmlFor="potongan">POTONGAN</label>
                            <button>+</button>
                            <button>-</button>
                        </div>
                    </div>
                </div>
                <div className="status_input-wrapper">
                    <label htmlFor="status">Status</label>
                    <select name="status">
                        <option value="inactive">inactive</option>
                        <option value="active">active</option>
                    </select>
                </div>
                <div className="nama_produk_input-wrapper">
                    <label htmlFor="nama_produk">Nama Produk *</label>
                    <input type="text" name="nama_produk"/>
                </div>
                <div className="gambar_input-wrapper">
                    <label htmlFor="gambar_produk">Gambar</label>
                    <input type="file" name="gambar_produk" />
                </div>
                <div className="deskripsi_input-wrapper">
                    <label htmlFor="deskripsi">Deskripsi</label>
                    <textarea name="deskripsi"></textarea>
                </div>
                <div className="save_input-wrapper">
                    <button id="cancel">Cancel</button>
                    <button id="save">Save</button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;