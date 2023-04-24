import React from 'react'
import ReactPaginate from 'react-paginate'

export default function Pagination() {
    return (
        <>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount= "7"
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                // onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </>
    )
}
