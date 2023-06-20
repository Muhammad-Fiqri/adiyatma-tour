import "../css/ReportSalesOrder.scss";
import Table from 'rc-table';

function ReportSalesOrder() 
{
    const columns = [
        {
            title: 'NO',
            dataIndex: 'no',
            key: 'no',
            width: 100,
            align: 'center',
          },
        {
          title: 'TGL PEMESANAN',
          dataIndex: 'tgl_pemesanan',
          key: 'tgl_pemesanan',
          width: 100,
          align: 'center',
        },
        {
          title: 'ID PEMESANAN',
          dataIndex: 'id_pemesanan',
          key: 'id_pemesanan',
          width: 100,
          align: 'center',
        },
        {
          title: 'NAMA PEMESAN',
          dataIndex: 'nama_pemesan',
          key: 'nama_pemesan',
          width: 200,
          align: 'center',
        },
        {
          title: 'NO. HANDPHONE',
          dataIndex: 'no_hp',
          key: 'no_hp',
          width: 100,
          align: 'center',
        },
        {
            title: 'PRODUK',
            dataIndex: 'produk',
            key: 'produk',
            width: 100,
            align: 'center',
        },
        {
            title: 'JUMLAH',
            dataIndex: 'jumlah',
            key: 'jumlah',
            width: 100,
            align: 'center',
        },
        {
            title: 'ACTION',
            dataIndex: 'action',
            key: 'action',
            width: 100,
            align: 'center',
            render: () =>
            <div>
                <button>Print SO <img src="./assets/print-icon.svg" alt="" /></button>
            </div>
        },
    ];

    const config_expand = {
            expandRowByClick : true,
    }

    const data = [
        { no: "1", tgl_pemesanan: "11/02/2023", id_pemesanan: "08979898999", nama_pemesan: "Graha skdha", no_hp: "08123456789", produk: "Lorem Ipsum", jumlah: "99", key: '1' },
        { no: "2", tgl_pemesanan: "11/02/2023", id_pemesanan: "08979898999", nama_pemesan: "Graha skdha", no_hp: "08123456789", produk: "Lorem Ipsum", jumlah: "99", key: '2' },
    ];
    return(
        <div className="ReportSalesOrder-wrapper">
            <h2>Sales Order</h2>
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
            <div className="interval">
                <p>Mulai dari</p>
                <input type="date" name="start" />
                <p>Hingga</p>
                <input type="date" name="end"/>
            </div>
            <div className="export-button">
                <button>Export</button>
            </div>
            <Table columns={columns} data={data} expandable={config_expand} tableLayout="fixed"/>
        </div>
    );
}

export default ReportSalesOrder;