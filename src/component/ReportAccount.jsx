import "../css/ReportAccount.scss";
import Table from 'rc-table';

function ReportAccount() {
    const columns = [
        {
          title: 'No',
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
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            width: 100,
            align: 'center',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            width: 100,
            align: 'center',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            width: 100,
            align: 'center',
            render: () => 
            <div>
                <input type="checkbox" name="" id="" />
            </div>, 
        },
    ];

    const config_expand = {
            expandRowByClick : true,
        }

    const data = [
        { no: '1', nama: "John Doe", no_hp: '08123456789', email: 'exam@gmail.com', role: '11/05/2003', status: '11/05/2003', key: '1' },
        { no: '2', nama: "John Doe", no_hp: '08123456789', email: 'exam@gmail.com', role: '11/05/2003', status: '11/05/2003', key: '2' },
    ];

    return(
        <div className="ReportAccount-wrapper">
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

export default ReportAccount;