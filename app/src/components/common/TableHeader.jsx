import React from 'react';


function TableHeader(props) {

    let { columns, sortColumn, onSort } = props

    function raiseSort(path){
        // let sortColumn = {...sortColumn} // we dont need to imitate the object
        if (sortColumn.path === path){
            sortColumn.order = sortColumn.order === "asc" ? 'desc':'asc'
        } else {
            sortColumn.path = path
            sortColumn.order = 'asc'
        }
        onSort(sortColumn)
    }

    function renderSortIcon(column){
        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order==="asc") return <i className="fa fa-sort-asc"></i>
        return <i className="fa fa-sort-desc"></i> 
    }

    return ( 
        <thead>
            <tr>
                { columns.map(column=>
                    <th 
                       className='cp'
                       key={column.path || column.key}
                       onClick={()=>raiseSort(column.path)}
                    > 
                        {column.label} 
                        {' '}
                        {renderSortIcon(column)}
                    </th>
                )}
            </tr>    
        </thead>
    );
}

export default TableHeader;