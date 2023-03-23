import React from "react";
import "./Pagination.css";

function Pagination({ page, pages, setPage }) {
  return (
    <div className="paginationWrapper">
      {Array.from({ length: pages }, (_, index) => index + 1).map((each) => (
        <button
          onClick={() => setPage(each)}
          key={each}
          className="paginationBtn"
          style={{
            backgroundColor: each === page ? "#3242aa" : "",
            color: "#a9a6a6",
            bordder: "none",
            transition: "all 0.3s",
          }}
        >
          {each}
        </button>
      ))}
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          style={{ backgroundColor: page <= 1 ? "#a9a6a6" : "" }}
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="prev"
        >
          prev
        </button>
      }
      {
        <button
          style={{ backgroundColor: page >= pages ? "#a9a6a6" : "" }}
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
