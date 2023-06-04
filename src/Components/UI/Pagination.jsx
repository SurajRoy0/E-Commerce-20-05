import React from "react";
import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.css";
const Pagination = ({ numberOfProduct, setSurrentPage, pageSize }) => {
  const handlePageChange = (data) => {
    setSurrentPage(data.selected);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles["pagination-container"]}>
      <ReactPaginate
        previousLabel={"PREV"}
        nextLabel={"NEXT"}
        pageCount={Math.ceil(numberOfProduct / pageSize)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        breakLabel="..."
        onPageChange={handlePageChange}
        containerClassName={styles.pagination}
        activeClassName={styles.active}
        pageClassName={styles["page-item"]}
        pageLinkClassName={styles["page-link"]}
        previousClassName={styles["page-item"]}
        previousLinkClassName={styles["page-link"]}
        nextClassName={styles["page-item"]}
        nextLinkClassName={styles["page-link"]}
        breakClassName={styles["page-item"]}
        breakLinkClassName={styles["page-link"]}
      />
    </div>
  );
};

export default Pagination;
