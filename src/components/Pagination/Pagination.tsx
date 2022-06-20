import React from 'react';
import ReactPaginate from "react-paginate";
import pagination from './Pagination.module.scss'

type PaginationType= {
    onChangePage: (number:number)=> void
    value: number
}

const Pagination = ({value, onChangePage}:PaginationType) => {

    return (

            <ReactPaginate
                className={pagination.root}
                breakLabel="..."
                nextLabel=">"
                onPageChange={(event)=> onChangePage(event.selected+1)}
                pageRangeDisplayed={4}
                pageCount={2}
                forcePage={value-1}
                previousLabel="<"
                // renderOnZeroPageCount={null}
            />

    );
};

export default Pagination;