import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";

const Pagination = () => {
  const {currentPage, setCurrentPage} = useContext(Context)
const handlePagination =(e)=>{
setCurrentPage(e.target.innerText)
}
console.log(currentPage)

  return (
    <div className="pagination-data" >
        <Link className="pagination-list" onClick = {(e) =>handlePagination(e)} >  1 </Link>
        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  2 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  3 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  4 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  5 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  6 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  7 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  8 </Link>

        <Link className="pagination-list"  onClick = {(e) =>handlePagination(e)}>  9 </Link>

        
     
    </div>
  );
};

export default Pagination;
