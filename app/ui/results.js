import CardResult from "./card-result";

import './results.css';

export default function Results({data}) {
    return (
        <div className="results">
            <h2>Results</h2>
            <div className="results__items">
                {
                    data.map(result => (
                        <CardResult key={result['_id']} result={result}></CardResult>
                    ))
                }
            </div>
        </div>
    )
}