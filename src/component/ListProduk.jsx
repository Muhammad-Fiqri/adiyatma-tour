import "../css/ListProduk.scss";
import Table from 'rc-table';

function ListProduk() 
{
    const columns = [
        {
          title: 'SKL',
          dataIndex: 'skl',
          key: 'skl',
          width: 100,
          align: 'center',
        },
        {
          title: 'Nama Produk',
          dataIndex: 'nama_produk',
          key: 'nama_produk',
          width: 100,
          align: 'center',
        },
        {
          title: 'Kategori',
          dataIndex: 'kategori',
          key: 'kategori',
          width: 200,
          align: 'center',
        },
        {
          title: 'Harga',
          dataIndex: 'harga',
          key: 'harga',
          width: 100,
          align: 'center',
        },
        {
            title: 'Gambar',
            dataIndex: 'gambar',
            key: 'gambar',
            width: 100,
            align: 'center',
            render: () => <img src="#img"></img>,
        },
        {
            title: 'Deskripsi',
            dataIndex: 'deskripsi',
            key: 'deskripsi',
            width: 100,
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            align: 'center',
            render: () => <input type="checkbox" name="" id="" />,
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 100,
            align: 'center',
            render: () => <div>
                    <img src="./assets/edit row.svg"></img>
                    <img src="./assets/delete row.svg"></img>
                </div>, 
        },
    ];

    const config_expand = {
            expandRowByClick : true,
        }

    const data = [
        { skl: '001', nama_produk: "Lorem Ipsum", kategori: 'Tour', harga: 'Rp. 12.025.250', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque mollitia ullam eum nihil rerum necessitatibus repellendus nesciunt dolorum, veniam natus praesentium sapiente, tempora doloremque illo inventore quidem providen', key: '1' },
        { skl: '002', nama_produk: "Lorem Ipsum", kategori: 'Tour', harga: 'Rp. 12.025.250', deskripsi: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis itaque mollitia ullam eum nihil rerum necessitatibus repellendus nesciunt dolorum, veniam natus praesentium sapiente, tempora doloremque illo inventore quidem providen', key: '2' },
    ];
      

    return(
        <div className="ListProduk-wrapper">
            <h2>List Produk</h2>
            <div className="search-bar">
                <input type="text" name="search_input" placeholder="Search"/>
                <img src="./assets/search-icon.svg"></img>
                <button>Cari</button>
            </div>
            <div className="show-entries">
                <p>Show</p>
                <select>
                    <option>2</option>
                </select>
                <p>Entries</p>
            </div>
            <div className="add-button">
                <button>Add</button>
            </div>
            <Table columns={columns} data={data} expandable={config_expand} tableLayout="fixed"/>
        </div>
    );
}

export default ListProduk;