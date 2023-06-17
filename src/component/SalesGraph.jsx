import "../css/SalesGraph.scss";
import PieComponent from "./Piechart";

function SalesGraph()
{
    return(
        <div className="SalesGraph-wrapper">
            <div className="box-title">
                <p>Produk Terjual</p>
            </div>
            <div className="interval">
                <p>Mulai dari</p>
                <input type="date" name="start" />
                <p>Hingga</p>
                <input type="date" name="end"/>
            </div>
            <PieComponent/>
            <div className="data-info">
                <div className="data-1">
                    <h3>60%</h3>
                    <p>Tour</p>
                    <div className="color-chart"></div>
                </div>
                <div className="data-2">
                    <h3>20%</h3>
                    <p>Tour</p>
                    <div className="color-chart"></div>
                </div>
                <div className="data-3">
                    <h3>30%</h3>
                    <p>Tour</p>
                    <div className="color-chart"></div>
                </div>
            </div>
        </div>
    );
}

export default SalesGraph;