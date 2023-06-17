import "../css/SalesGraph.scss";

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
        </div>
    );
}

export default SalesGraph;