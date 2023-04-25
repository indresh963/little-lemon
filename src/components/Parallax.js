import { Link } from "react-router-dom"

export default function Parallax() {
    return (
        <div id="parallax">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-10 text-center">
                        <h2 className="mb-3"><q>
                            Let food be thy medicine and medicine be thy food.
                        </q></h2>
                        <h5 className="mb-3">Learn more about our food, services and business by clicking the button below</h5>
                        <button type="button" class="main-btn"><Link to="/about">Learn more</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}