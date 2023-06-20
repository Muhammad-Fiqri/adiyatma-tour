import "../css/ReportSalesDetail.scss";
import Table from 'rc-table';

function ReportSalesDetail() 
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
          title: 'SUBTOTAL PENJUALAN',
          dataIndex: 'subtotal_penjualan',
          key: 'subtotal_penjualan',
          width: 100,
          align: 'center',
        },
        {
            title: 'POTONGAN',
            dataIndex: 'potongan',
            key: 'potongan',
            width: 100,
            align: 'center',
        },
        {
            title: 'TOTAL PENJUALAN',
            dataIndex: 'total_penjualan',
            key: 'total_penjualan',
            width: 100,
            align: 'center',
        },
        {
            title: 'PEMBAYARAN',
            dataIndex: 'pembayaran',
            key: 'pembayaran',
            width: 100,
            align: 'center',
        },
        {
            title: 'PIUTANG PENJUALAN',
            dataIndex: 'piutang_penjual',
            key: 'piutang_penjualan',
            width: 100,
            align: 'center',
        },
    ];

    const config_expand = {
            expandRowByClick : true,
        }

    const data = [
        { no: "1", tgl_pemesanan: "11/02/2023", id_pemesanan: "08979898999", nama_pemesan: "Graha skdha", subtotal_penjualan: "Rp9.999.999", potongan: "Rp9.999.999", total_penjualan: "Rp9.999.999", pembayaran : "Rp9.999.999", piutang_penjual : "Rp9.999.999", key: '1' },
        { no: "2", tgl_pemesanan: "11/02/2023", id_pemesanan: "08979898999", nama_pemesan: "Graha skdha", subtotal_penjualan: "Rp9.999.999", potongan: "Rp9.999.999", total_penjualan: "Rp9.999.999", pembayaran : "Rp9.999.999", piutang_penjual : "Rp9.999.999", key: '2' },
    ];
    return(
        <div className="ReportSalesDetail-wrapper">
            <h2>Sales Report Detail</h2>
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

export default ReportSalesDetail;