import { useState, useEffect } from "react";
import $ from 'jquery';
import "../css/Dashboard.scss";
import BusinessInfo from "./BusinessInfo";
import SalesGraph from "./SalesGraph";
import UserRole from "./UserRole";
import TotalSoldMonthly from "./TotalSoldMonthly";
import TotalSoldDaily from "./TotalSoldDaily";
import Footer from "./Footer";

function Dashboard()
{
    const [is_slided,set_slided] = useState(false);
    const [current_menu,set_current_menu] = useState("Dashboard");

    const dashboard_clicked = () => {
        console.log("dashboard_clicked");
        set_current_menu("Dashboard");
        console.log(current_menu);
    }

    const product_clicked = () => {
        console.log("product_clicked");
        set_current_menu("Product");
        console.log(current_menu);
    }

    useEffect(() => {
        switch(current_menu)
        {
            case "Dashboard":
                $(".dashboard>p").css("color","red");
                $(".produk>p").css("color","black");
                break;

            case "Product":
                $(".dashboard>p").css("color","black");
                $(".produk>p").css("color","red");
                break;
        }
    });


    const burger_icon_clicked = () => {
        let side_panel = $(".left-panel");
        let main_panel = $(".main");

        if (!is_slided)
        {
            side_panel.animate({width:'0vw'},200);
            side_panel.hide();
            main_panel.animate({width:'100vw'},200);
            set_slided(true);
        } else if (is_slided) {
            side_panel.animate({width:'20vw'},200);
            side_panel.show();
            main_panel.animate({width:'80vw'},200);
            set_slided(false);
        }
    }

    return(
        <div className="Dashboard-wrapper">

            <div className="sticky-top-nav">
                <div className="float-left">
                    <img src="./assets/adiyatma-logo-with-text.svg"></img>
                    <div className="burger-icon">
                        <img onClick={burger_icon_clicked} src="./assets/burger-icon.svg"></img>
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
                    <p onClick={dashboard_clicked}>Dashboard</p>
                </div>
                <div className="produk">
                    <img src="./assets/product-icon.svg"></img>
                    <p onClick={product_clicked}>Produk</p>
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

                <div id="content-root">
                    {current_menu == "Dashboard" && 
                    <>
                    <BusinessInfo/>
                    <SalesGraph/>
                    <UserRole/>
                    <TotalSoldMonthly/>
                    <TotalSoldDaily/>
                    </>
                    }
                </div>
            </div>


            <Footer/>
        </div>
    );
}

export default Dashboard;