import React from 'react';
import _ from 'lodash'  // underscore 
import PropTypes from 'prop-types'


function Pagination(props) {

    const { itemCount,pageSize,onPageChange,currentPage,handlePageSizeChange,resetPagination} = props
    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pageCount+1 )
    const options = [3,4,5,6]

    if (currentPage > pageCount){
        // the job of this condition when we delete the last item on a page it arise 
        // an impossible situation comes first and we are just want to supress it 
        // and head back to page one
        resetPagination()
    }


    if (pageCount === 1) {return null}

    return ( 
    <nav aria-label="Page navigation">
        <div className='d-flex justify-content-between '>
            <div>
                <ul className="pagination">
                {pages.map(page=>{
                    return (
                        <li key={page} className={`page-item ${currentPage===page ? 'active' : '' } `} 
                            onClick={()=>onPageChange(page)}>
                            <button className="page-link">{page}</button>
                        </li>
                    )
                })} 
                </ul>
            </div>
            <div className='d-flex justify-content-between align-items-center'>
                <p className='text-secondary'>Showing page {currentPage} of {pageCount}</p>
            </div>
            <div>
                <div className="dropdown">
                <button className="btn bg-white border dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   <span className="badge badge-dark">{pageSize}</span> Results per page
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {options.map(i=>{
                        let active = pageSize === i ? 'active':''
                        return (
                            <li key={i} 
                            onClick={()=>handlePageSizeChange(i)} className={"dropdown-item "+active} >{i}</li>
                        )
                    })}
                </div>
                </div>
            </div>
        </div>
    </nav> 
    ) ;
}

Pagination.propTypes = {
    itemCount   : PropTypes.number.isRequired, 
    pageSize    : PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired, 
    currentPage : PropTypes.number.isRequired, 
    handlePageSizeChange: PropTypes.func.isRequired
}

export default Pagination;


// {/* <p>{pageSize} { itemCount } </p> */}