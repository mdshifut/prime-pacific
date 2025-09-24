"use client";
import React, { useState } from "react";

import "./ListTable.css";

const ListTable = ({ className = "", data = [], title }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  // Filter data by search
  const filteredData = data.filter(
    (row) =>
      row.anzsco.toLowerCase().includes(search.toLowerCase()) ||
      row.occupation.toLowerCase().includes(search.toLowerCase()) ||
      row.list.toLowerCase().includes(search.toLowerCase()) ||
      row.skillLevel.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filteredData.length / pageSize));
  const paginatedData = filteredData.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) setPage(newPage);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  return (
    <div
      className={`container-fluid overflow-hidden py-5 bg-light ${className}`}
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-xl-12" data-wow-delay="0.3s">
            <div className="list-table-wrapper">
              <div className="list-table-controls">
                <h3>{title}</h3>
                <input
                  type="text"
                  className="list-table-search"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
              <table className="list-table">
                <thead>
                  <tr>
                    <th>ANZSCO</th>
                    <th>Occupation</th>
                    <th>List</th>
                    <th>Skill Level</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length === 0 ? (
                    <tr>
                      <td colSpan={4} className="text-center">
                        No data found
                      </td>
                    </tr>
                  ) : (
                    paginatedData.map((row, idx) => (
                      <tr key={idx}>
                        <td>{row.anzsco}</td>
                        <td>{row.occupation}</td>
                        <td>{row.list}</td>
                        <td>{row.skillLevel}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="list-table-footer">
                <div className="list-table-footer-col">
                  <div className="list-table-page-size">
                    Show
                    <select value={pageSize} onChange={handlePageSizeChange}>
                      {[10, 20, 50, 100].map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                    entries
                  </div>
                </div>
                <div className="list-table-footer-col">
                  <div className="list-table-pagination">
                    <button
                      className="list-table-page-btn"
                      onClick={() => handlePageChange(1)}
                      disabled={page === 1}
                    >
                      First
                    </button>
                    <button
                      className="list-table-page-btn"
                      onClick={() => handlePageChange(page - 1)}
                      disabled={page === 1}
                    >
                      Prev
                    </button>
                    {/* Numbered pagination */}
                    {(() => {
                      const btns = [];
                      let start = Math.max(1, page - 2);
                      let end = Math.min(totalPages, page + 2);
                      if (start > 1) {
                        btns.push(
                          <span
                            key="start-ellipsis"
                            className="list-table-ellipsis"
                          >
                            ...
                          </span>
                        );
                      }
                      for (let i = start; i <= end; i++) {
                        btns.push(
                          <button
                            key={i}
                            className={`list-table-page-btn${
                              i === page ? " active" : ""
                            }`}
                            onClick={() => handlePageChange(i)}
                            disabled={i === page}
                          >
                            {i}
                          </button>
                        );
                      }
                      if (end < totalPages) {
                        btns.push(
                          <span
                            key="end-ellipsis"
                            className="list-table-ellipsis"
                          >
                            ...
                          </span>
                        );
                      }
                      return btns;
                    })()}
                    <button
                      className="list-table-page-btn"
                      onClick={() => handlePageChange(page + 1)}
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                    <button
                      className="list-table-page-btn"
                      onClick={() => handlePageChange(totalPages)}
                      disabled={page === totalPages}
                    >
                      Last
                    </button>
                    <span className="list-table-page-info">
                      Page {page} of {totalPages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTable;
