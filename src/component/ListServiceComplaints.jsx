import "../css/ListServiceComplaints.scss";
import Table from 'rc-table';

function ListServiceComplaints() {
    const columns = [
        {
          title: 'NO',
          dataIndex: 'no',
          key: 'no',
          width: 100,
          align: 'center',
        },
        {
          title: 'Nama',
          dataIndex: 'nama',
          key: 'nama',
          width: 100,
          align: 'center',
        },
        {
          title: 'No. Handphone',
          dataIndex: 'no_hp',
          key: 'no_hp',
          width: 100,
          align: 'center',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
          width: 100,
          align: 'center',
        },
        {
            title: 'Tanggal',
            dataIndex: 'tgl',
            key: 'tgl',
            width: 100,
            align: 'center',
        },
        {
            title: 'Keluhan Layanan',
            dataIndex: 'keluhan_layanan',
            key: 'keluhan_layanan',
            width: 300,
            align: 'center',
        },
    ];

    const config_expand = {
            expandRowByClick : true,
        }

    const data = [
        { no: "1", nama: "John Doe", no_hp: "08123456789", email: "exam@gmail.com", tgl: "31/12/2023", keluhan_layanan: "saya mengeluh", key: '1' },
        { no: "2", nama: "John Doe", no_hp: "08123456789", email: "exam@gmail.com", tgl: "31/12/2023", keluhan_layanan: "saya juga mengeluh", key: '2' }
    ];

    return(
        <div className="ListServiceComplaints-wrapper">
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
            <Table columns={columns} data={data} expandable={config_expand} tableLayout="fixed"/>
        </div>
    );
}

export default ListServiceComplaints;