import "../css/ListReservasi.scss";
import Table from 'rc-table';

function ListReservasi() 
{
    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          width: 100,
          align: 'center',
        },
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
          width: 200,
          align: 'center',
        },
        {
          title: 'No Handphone',
          dataIndex: 'no_hp',
          key: 'no_hp',
          width: 200,
          align: 'center',
        },
        {
          title: 'TGL/JAM',
          dataIndex: 'tgl_jam',
          key: 'tgl_jam',
          width: 100,
          align: 'center',
        },
        {
            title: 'Produk',
            dataIndex: 'produk',
            key: 'produk',
            width: 100,
            align: 'center',
        },
        {
            title: 'Jumlah',
            dataIndex: 'jumlah',
            key: 'jumlah',
            width: 100,
            align: 'center',
        },
        {
            title: 'DP',
            dataIndex: 'dp',
            key: 'dp',
            width: 100,
            align: 'center',
        },
        {
            title: 'Sisa Pembayaran',
            dataIndex: 'sisa_pembayaran',
            key: 'sisa_pembayaran',
            width: 100,
            align: 'center',
        },
        {
            title: 'Validasi',
            dataIndex: 'validasi',
            key: 'validasi',
            width: 100,
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            align: 'center',
            render: () => 
            <div className="status-wrapper">
                <div style={{ backgroundColor:'green', }}>APPROVE</div>
            </div>
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 200,
            align: 'center',
            render: () => 
            <div className="btn-wrapper">
                <button>A</button><button>B</button>
            </div>
        },
    ];

    const config_expand = {
            expandRowByClick : true,
        }

    const data = [
        {id: '0', nama: "John Doe", no_hp: "08123456789", tgl_jam: "31-12-2023/24.00", produk: "0920974826", jumlah: "Rp. 9,999,999", dp: "Rp. 9,999,999", sisa_pembayaran: "Rp. 9,999,999", validasi: "Valid"},
        {id: '1', nama: "John Doe", no_hp: "08123456789", tgl_jam: "31-12-2023/24.00", produk: "0920974826", jumlah: "Rp. 9,999,999", dp: "Rp. 9,999,999", sisa_pembayaran: "Rp. 9,999,999", validasi: "Valid"}
    ];
      

    return(
        <div className="ListReservasi-wrapper">
            <h2>List Reservasi</h2>
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

export default ListReservasi;