import "../css/AddProduct.scss";

function AddProduct() {
    return(
        <div className="AddProduct-wrapper">
            <h1>Add Produk</h1>
            <form>
                <label htmlFor="SKL_input">SKL *
                    <input type="text" name="SKL_input"></input>
                </label>
                <label htmlFor="kategori_produk">Kategori Produk *
                    <select>
                        <option>Tour</option>
                    </select>
                </label>
            </form>
        </div>
    );
}

export default AddProduct;