import CardResult from "./card-result";
import Error from "../ui/error";
import { useEffect, useState } from "react";
import "./results.css";

export default function Results({ data }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
        // Get the page number from the URL query on component mount
        const params = new URLSearchParams(window.location.search);
        const page = parseInt(params.get("p"), 10);
        if (page && !isNaN(page)) {
            setCurrentPage(page);
        }
    }, []);

    const updateQueryParam = (pageNumber) => {
        const params = new URLSearchParams(window.location.search);
        params.set("p", pageNumber);
        window.history.pushState(null, "", `?${params.toString()}`);
    };

    const goToPage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
            updateQueryParam(pageNumber);
        }
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    // handle error
    if (totalPages < currentPage) {
        return <Error />
    } 

    const currentResults = data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="results">
            <h2>Results</h2>
            <div className="results__items">
                {currentResults.map((result) => (
                    <CardResult key={result["_id"]} result={result} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="pagination-controls">
                {/* Previous Button */}
                <button
                    className="button-pagination"
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Dynamic Page Numbers */}
                {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    return (
                        <button
                            key={pageNumber}
                            onClick={() => goToPage(pageNumber)}
                            className={`button-number ${
                                currentPage === pageNumber ? "active" : ""
                            }`}
                        >
                            {pageNumber}
                        </button>
                    );
                })}

                {/* Next Button */}
                <button
                    className="button-pagination"
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
