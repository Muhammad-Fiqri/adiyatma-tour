import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import ChooseProduct from "./ChooseProduct";
import ProfileTab from "./ProfileTab";
import AddReservation from "./AddReservation";
import ListReservasi from "./ListReservasi";
import AddServiceComplaints from "./AddServiceComplaints";
import ListServiceComplaints from "./ListServiceComplaints";
import AddAccount from "./AddAccount";
import ListAccount from "./ListAccount";
import ReportAccount from "./ReportAccount";
import ReportProduk from "./ReportProduk";
import ReportSalesDetail from "./ReportSalesDetail";
import ReportSalesResume from "./ReportSalesResume";
import ReportSalesOrder from "./ReportSalesOrder";
import ReportPurchaseOrder from "./ReportPurchaseOrder";

function Dashboard()
{
    const [is_slided,set_slided] = useState(false);
    const [current_menu,set_current_menu] = useState("Dashboard");
    const navigate = useNavigate();

    const logout = () => {
        console.log("logout");
        navigate("/");
    }
    useEffect(() => {
        console.log(current_menu);
        switch(current_menu)
        {
            case "Dashboard":
                $(".dashboard>p").css("color","red");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Beranda");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Profile":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Profil");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resumev").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "Add Product":
                $(".dashboard>p").css("color","black");
                $(".produk>p").css("color","red");
                $(".reservation>p").css("color","black");
                $(".add-product>p").css("color","red");
                $(".main>.title>p").text("Produk/ Add");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "List Product":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","red");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Produk/ List");
                $(".list-produk>p").css("color","red");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Add Reservation":
                $(".dashboard>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","red");
                $(".add-product>p").css("color","black");
                $(".main>.title>p").text("Reservasi/ Add");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","red");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "List Reservation":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","red");
                $(".main>.title>p").text("Reservasi/ List");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","red");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "Add Service Complaints":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Keluhan Layanan/ Add");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","red");
                $(".add-service-complaints>p").css("color","red");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "List Service Complaints":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Keluhan Layanan/ List");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","red");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","red");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "Add Account":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Akun/ Add");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","red");
                $(".add-account>p").css("color","red");
                $(".account").css("color","red");
                $(".list-account>p").css("color","black");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "List Account":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Akun/ List");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","red");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","red");
                $(".report").css("color","black");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Report Account":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Account");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>P").css("color","red");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Report Product":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Product");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","red");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;

            case "Report Sales Resume":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Sales Resume");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","red");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Report Sales Detail":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Sales Detail");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","red");
                $(".child-of-report>.report-sales-order>P").css("color","black");
                $(".child-of-report>.report-purchase-order>P").css("color","black");
                break;
            
            case "Report Sales Order":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Sales Order");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>P").css("color","black");
                $(".child-of-report>.report-product>P").css("color","black");
                $(".child-of-report>.report-sales-resume>P").css("color","black");
                $(".child-of-report>.report-sales-detail>P").css("color","black");
                $(".child-of-report>.report-sales-order>P").css("color","red");
                $(".child-of-report>.report-purchase-order>p").css("color","black");
                break;
            
            case "Report Purchase Order":
                $(".dashboard>p").css("color","black");
                $(".add-product>p").css("color","black");
                $(".produk>p").css("color","black");
                $(".reservation>p").css("color","black");
                $(".main>.title>p").text("Report/ Purchase Order");
                $(".list-produk>p").css("color","black");
                $(".add-reservation>p").css("color","black");
                $(".list-reservation>p").css("color","black");
                $(".service-complaints>p").css("color","black");
                $(".add-service-complaints>p").css("color","black");
                $(".list-service-complaints>p").css("color","black");
                $(".account").css("color","black");
                $(".add-account>p").css("color","black");
                $(".list-account>p").css("color","black");
                $(".report").css("color","red");
                $(".child-of-report>.report-account>p").css("color","black");
                $(".child-of-report>.report-product>p").css("color","black");
                $(".child-of-report>.report-sales-resume>p").css("color","black");
                $(".child-of-report>.report-sales-detail>p").css("color","black");
                $(".child-of-report>.report-sales-order>p").css("color","black");
                $(".child-of-report>.report-purchase-order>p").css("color","red");
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
                        <div className="choose-produk">
                            <img width={"12px"} src="./assets/pointer-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Choose Product")}}>Pilih Produk (Beta)</p>
                        </div>
                    </div>
                <div className="reservation">
                    <img src="./assets/reservasi-icon.svg"></img>
                    <p onClick={() => {$(".child-of-reservation").slideToggle();}}>Reservasi</p>
                    <img src="./assets/down-arrow-icon.svg"></img>
                </div>
                    <div className="child-of-reservation">
                        <div className="add-reservation">
                            <img src="./assets/tambah-produk-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Add Reservation")}}>Buat Reservasi</p>
                        </div>
                        <div className="list-reservation">
                            <img src="./assets/list-produk-icon.svg"></img>
                            <p onClick={() => {set_current_menu("List Reservation")}}>List Reservasi</p>
                        </div>
                    </div>
                <div className="service-complaints">
                    <img src="./assets/service-complaints-icon.svg"></img>
                    <p onClick={() => {$(".child-of-service-complaints").slideToggle();}}>Keluhan Layanan</p>
                </div>
                    <div className="child-of-service-complaints">
                        <div className="add-service-complaints">
                            <img src="./assets/tambah-produk-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Add Service Complaints")}}>Tambah Keluhan</p>
                        </div>
                        <div className="list-service-complaints">
                            <img src="./assets/list-produk-icon.svg"></img>
                            <p onClick={() => {set_current_menu("List Service Complaints")}}>List Keluhan</p>
                        </div>
                    </div>
                <div className="report">
                    <img src="./assets/report-icon.svg"></img>
                    <p onClick={() => {$(".child-of-report").slideToggle();}}>Laporan</p>
                </div>
                    <div className="child-of-report">
                        <div className="report-account">
                            <img src="./assets/report-account-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Report Account")}}>Akun</p>
                        </div>
                        <div className="report-product">
                            <img src="./assets/report-product-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Report Product")}}>Produk</p>
                        </div>
                        <div className="report-sales-resume">
                            <img src="./assets/report-sales-resume.svg"></img>
                            <p onClick={() => {set_current_menu("Report Sales Resume")}}>Sales Resume</p>
                        </div>
                        <div className="report-sales-detail">
                            <img src="./assets/report-sales-detail.svg"></img>
                            <p onClick={() => {set_current_menu("Report Sales Detail")}}>Sales Report Detail</p>
                        </div>
                        <div className="report-sales-order">
                            <img src="./assets/report-sales-order.svg"></img>
                            <p onClick={() => {set_current_menu("Report Sales Order")}}>Sales Order</p>
                        </div>
                        <div className="report-purchase-order">
                            <img src="./assets/report-purchase-order.svg"></img>
                            <p onClick={() => {set_current_menu("Report Purchase Order")}}>Purchase Order</p>
                        </div>
                    </div>
                <div className="account">
                    <img src="./assets/account-icon.svg"></img>
                    <p onClick={() => {$(".child-of-account").slideToggle();}}>Akun</p>
                </div>
                    <div className="child-of-account">
                        <div className="add-account">
                            <img src="./assets/add-account-icon.svg"></img>
                            <p onClick={() => {set_current_menu("Add Account")}}>Tambah Akun</p>
                        </div>
                        <div className="list-account">
                            <img src="./assets/list-account-icon.svg"></img>
                            <p onClick={() => {set_current_menu("List Account")}}>List Akun</p>
                        </div>
                    </div>
                <div className="logout">
                    <img src="./assets/logout-icon.svg"></img>
                    <p onClick={logout}>Log Out</p>
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
                    : current_menu == "Choose Product" ? <ChooseProduct/>
                    : current_menu == "Profile" ? <ProfileTab/> 
                    : current_menu == "Add Reservation" ? <AddReservation/>
                    : current_menu == "List Reservation" ? <ListReservasi/>
                    : current_menu == "Add Service Complaints" ? <AddServiceComplaints/>
                    : current_menu == "List Service Complaints" ? <ListServiceComplaints/>
                    : current_menu == "Add Account" ? <AddAccount/>
                    : current_menu == "List Account" ? <ListAccount/>
                    : current_menu == "Report Account" ? <ReportAccount/>
                    : current_menu == "Report Product" ? <ReportProduk/>
                    : current_menu == "Report Sales Detail" ? <ReportSalesDetail/>
                    : current_menu == "Report Sales Resume" ? <ReportSalesResume/>
                    : current_menu == "Report Sales Order" ? <ReportSalesOrder/>
                    : current_menu == "Report Purchase Order" ? <ReportPurchaseOrder/>
                    : "Not Found"
                    }
                </div>
            </div>


            <Footer/>
        </div>
    );
}

export default Dashboard;