import "../css/TotalSoldMonthly.scss";
import LineChartSoldMonthly from "./LineChartSoldMonthly";

function TotalSoldMonthly()
{
    return(
        <div className="TotalSoldMonthly-wrapper">
            <p>Trend Penjualan Bulanan</p>
            <select>
                <option>Tour</option>
            </select>
            <select>
                <option>2022</option>
            </select>
            <div className="line_chart_wrapper">
                <LineChartSoldMonthly/>
            </div>
        </div>
    );
}

export default TotalSoldMonthly;