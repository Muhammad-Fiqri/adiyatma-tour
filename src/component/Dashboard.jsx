import { useState, useEffect } from "react";
import $ from 'jquery';
import "../css/Dashboard.scss";
import BusinessInfo from "./BusinessInfo";
import SalesGraph from "./SalesGraph";
import UserRole from "./UserRole";
import TotalSoldMonthly from "./TotalSoldMonthly";
import TotalSoldDaily from "./TotalSoldDaily";
import Footer from "./Footer";
import AddProduct from "./AddProduct";
import ListProduk from "./ListProduk";
import ProfileTab from "./ProfileTab";

function Dashboard()
{
    const [is_slided,set_slided] = useState(false);
    const [current_menu,set_current_menu] = useState("Dashboard");

    useEffect(() => {
        console.log(current_menu);
        switch(current_menu)
        {
            case "Dashboard":
                $(".dashboard>p").css("color","red");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".main>.title>p").text("Beranda");
                $(".list-produk>p").css("color","black");
                break;

            case "Add Product":
                $(".dashboard>p").css("color","black");
                $(".produk>p").css("color","red");
                $(".add-product>p").css("color","red");
                $(".main>.title>p").text("Produk/ List");
                $(".list-produk>p").css("color","black");
                break;

            case "List Product":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".main>.title>p").text("Produk/ List");
                $(".list-produk>p").css("color","red");
                break;

            case "Profile":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".main>.title>p").text("Profil");
                $(".list-produk>p").css("color","black");
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
                    <div className="profile-name" onClick={() => {set_current_menu("Profile")}}>
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
                    <p onClick={() => {set_current_menu("Dashboard")}}>Dashboard</p>
                </div>
                <div className="produk">
                    <img src="./assets/product-icon.svg"></img>
                    <p onClick={() => {$(".child-of-produk").slideToggle();}}>Produk</p>
                    <img src="./assets/down-arrow-icon.svg"></img>
                </div>
                <div className="child-of-produk">
                    <div className="add-product">
                        <img src="./assets/tambah-produk-icon.svg"></img>
                        <p onClick={() => {set_current_menu("Add Product")}}>Tambah Produk</p>
                    </div>
                    <div className="list-produk">
                        <img src="./assets/list-produk-icon.svg"></img>
                        <p onClick={() => {set_current_menu("List Product")}}>List Produk</p>
                    </div>
                </div>
                <div className="reservation">
                    <img src="./assets/reservasi-icon.svg"></img>
                    <p onClick={() => {set_current_menu("Reservasion")}}>Reservasi</p>
                    <img src="./assets/down-arrow-icon.svg"></img>
                </div>
                <div className="service-complaints">
                    <img src="./assets/service-complaints-icon.svg"></img>
                    <p onClick={() => {set_current_menu("Service Complaints")}}>Keluhan Layanan</p>
                </div>
                <div className="report">
                    <img src="./assets/report-icon.svg"></img>
                    <p onClick={() => {set_current_menu("Report")}}>Laporan</p>
                </div>
                <div className="account">
                    <img src="./assets/account-icon.svg"></img>
                    <p onClick={() => {set_current_menu("Account")}}>Akun</p>
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
                    {current_menu == "Dashboard" ? 
                    <>
                    <BusinessInfo/>
                    <SalesGraph/>
                    <UserRole/>
                    <TotalSoldMonthly/>
                    <TotalSoldDaily/>
                    </> 
                    : current_menu == "Add Product" ? <AddProduct/> 
                    : current_menu == "List Product" ? <ListProduk/>
                    : current_menu == "Profile" ? <ProfileTab/> 
                    : "Not Found"
                    }
                </div>
            </div>


            <Footer/>
        </div>
    );
}

export default Dashboard;