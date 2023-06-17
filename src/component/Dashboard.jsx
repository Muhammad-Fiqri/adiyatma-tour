import "../css/Dashboard.scss";

function Dashboard()
{
    return(
        <div className="Dashboard-wrapper">

            <div className="sticky-top-nav">
                <div className="float-left">
                    <img src="./src/assets/adiyatma-logo-with-text.svg"></img>
                    <div className="burger-icon">
                        <img src="./src/assets/burger-icon.svg"></img>
                    </div>
                </div>
                <div className="float-right">
                    <div className="profile-pic">
                        <img src="./src/assets/author-nav.png"></img>
                    </div>
                    <div className="profile-name">
                        Michael
                    </div>
                </div>
            </div>



            <div className="left-panel">
                <div className="profile">
                    <img src="./src/assets/profile_pic.png"></img>
                    <p>MICHAEL</p>
                    <p>info@example.com</p>
                </div>
                <div className="dashboard">
                    <img src="./src/assets/dashboard-icon.svg"></img>
                    <p>Dashboard</p>
                </div>
                <div className="produk">
                    <img src="./src/assets/product-icon.svg"></img>
                    <p>Produk</p>
                    <img src="./src/assets/down-arrow-icon.svg"></img>
                </div>
                <div className="reservation">
                    <img src="./src/assets/reservasi-icon.svg"></img>
                    <p>Reservasi</p>
                    <img src="./src/assets/down-arrow-icon.svg"></img>
                </div>
                <div className="service-complaints">
                    <img src="./src/assets/service-complaints-icon.svg"></img>
                    <p>Keluhan Layanan</p>
                </div>
                <div className="report">
                    <img src="./src/assets/report-icon.svg"></img>
                    <p>Laporan</p>
                </div>
                <div className="account">
                    <img src="./src/assets/account-icon.svg"></img>
                    <p>Akun</p>
                </div>
                <div className="logout">
                    <img src="./src/assets/logout-icon.svg"></img>
                    <p>Log Out</p>
                </div>
            </div>


            
            <div className="main">
                <div className="title">
                    <p>Beranda</p>
                    <div>
                        <img src="./src/assets/home-icon.svg" className="home-icon" />
                        <p>Dashboard</p>
                        <div className="dot"></div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;