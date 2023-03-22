import React from "react";
import "./Pagination.css";

function Pagination({page, pages, setPage}) {
 
  return (
    <div className="paginationWrapper">
 {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
          <button onClick={() => setPage(each)} key={each} className='paginationBtn'>{each}</button>
        ))}
        <p className="pagination">
          Pages: {page} of {pages}
        </p>
        {
          <button
            disabled={page <= 1}
            onClick={() => setPage((prev) => prev - 1)}
            className="prev"
          >
            prev
          </button>
        }
        {
          <button
            disabled={page >= pages}
            aria-disabled={page >= pages}
            onClick={() => setPage((prev) => prev + 1)}
            className="next"
          >
            next
          </button>
        }
    </div>
  );
}
export default Pagination;