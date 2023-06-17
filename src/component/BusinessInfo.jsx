import "../css/BusinessInfo.scss";

function BusinessInfo()
{
    return(
        <>
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
        </>
    );
}

export default BusinessInfo;