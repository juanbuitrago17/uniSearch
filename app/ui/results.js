import CardResult from "./card-result";
import { useState } from "react";
import './results.css';

export default function Results({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Calculate total pages
    const totalPages = Math.ceil(data.length / itemsPerPage);

    // Get current page data
    const currentResults = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
      };
      
    return (
        <div className="results">
            <h2>Results</h2>
            <div className="results__items">
                {currentResults.map(result => (
                    <CardResult key={result['_id']} result={result} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                {/* Previous Button */}
                <button className="button-pagination" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>

                {/* Dynamic Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => goToPage(pageNumber)}
                            className={`button-number ${currentPage === pageNumber ? 'active' : ''}`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button className="button-pagination" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    )
}