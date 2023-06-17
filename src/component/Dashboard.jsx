import "../css/Dashboard.scss";

function Dashboard()
{
    return(
        <div className="Dashboard-wrapper">

            <div className="sticky-top-nav">
                <div className="float-left">
                    <img src="./assets/adiyatma-logo-with-text.svg"></img>
                    <div className="burger-icon">
                        <img src="./assets/burger-icon.svg"></img>
                    </div>
                </div>
                <div className="float-right">
                    <div className="profile-pic">
                        <img src="./assets/author-nav.png"></img>
                    </div>
                    <div className="profile-name">
                        Michael
                    </div>
                </div>
            </div>



            <div className="left-panel">
                <div className="profile">
                    <img src="./assets/profile_pic.png"></img>
                    <p>MICHAEL</p>
                    <p>info@example.com</p>
                </div>
                <div className="dashboard">
                    <img src="./assets/dashboard-icon.svg"></img>
                    <p>Dashboard</p>
                </div>
                <div className="produk">
                    <img src="./assets/product-icon.svg"></img>
                    <p>Produk</p>
                    <img src="./assets/down-arrow-icon.svg"></img>
                </div>
                <div className="reservation">
                    <img src="./assets/reservasi-icon.svg"></img>
                    <p>Reservasi</p>
                    <img src="./assets/down-arrow-icon.svg"></img>
                </div>
                <div className="service-complaints">
                    <img src="./assets/service-complaints-icon.svg"></img>
                    <p>Keluhan Layanan</p>
                </div>
                <div className="report">
                    <img src="./assets/report-icon.svg"></img>
                    <p>Laporan</p>
                </div>
                <div className="account">
                    <img src="./assets/account-icon.svg"></img>
                    <p>Akun</p>
                </div>
                <div className="logout">
                    <img src="./assets/logout-icon.svg"></img>
                    <p>Log Out</p>
                </div>
            </div>


            
            <div className="main">
                <div className="title">
                    <p>Beranda</p>
                    <div>
                        <img src="./assets/home-icon.svg" className="home-icon" />
                        <p>Dashboard</p>
                        <div className="dot"></div>
                    </div>
                </div>
                <div className="interval">
                    <p>Mulai dari</p>
                    <input type="date" name="start" />
                    <p>Hingga</p>
                    <input type="date" name="end"/>
                </div>
                <div className="business-info-wrapper">
                    <div className="sold-box">
                        <div className="total">
                            <p id="total-sold">100+</p>
                            <p>Total Penjualan</p>
                        </div>
                        <div className="icon">
                            <img src="/assets/briefcase-icon.svg"></img>
                        </div>
                        <div className="percent">
                            <p id="sold-percent">25.36%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    <div className="debt-box">
                        <div className="debt">
                            <p id="total-debt">Rp. 30.825.300</p>
                            <p>Total Piutang</p>
                        </div>
                        <div className="icon">
                            <img src="/assets/shopping-cart-icon.svg"></img>
                        </div>
                        <div className="percent">
                            <p id="debt-percent">25.36%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                    <div className="sales-box">
                        <div className="sales">
                            <p id="total-sales">Rp. 9.999.999</p>
                            <p>Total Sales</p>
                        </div>
                        <div className="icon">
                            <img src="/assets/dollar-coin-icon.svg"></img>
                        </div>
                        <div className="percent">
                            <p id="sales-percent">25.36%</p>
                            <p>Since last month</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;