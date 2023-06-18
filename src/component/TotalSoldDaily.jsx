import "../css/TotalSoldDaily.scss";
import LineChartSoldDaily from "./LineChartSoldDaily";

function TotalSoldDaily()
{
    return(
        <div className="TotalSoldDaily-wrapper">
            <p>Trend Penjualan Harian</p>
            <select>
                <option>Tour</option>
            </select>
            <select>
                <option>January</option>
            </select>
            <div className="line_chart_wrapper">
                <LineChartSoldDaily/>
            </div>
        </div>
    );
}

export default TotalSoldDaily