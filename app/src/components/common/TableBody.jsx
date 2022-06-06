import React from 'react';
import _ from 'lodash'

function TableBody({data, columns}) {

    let creatKey = (column, item) => item._id + parseInt(Math.random()*10000000)

    let renderTd = (column, item)=> column.content ? column.content(item):_.get(item, column.path)

    let renderCell = (item) => {
        return (
             <tr key={item._id}>
                {columns.map(column => 
                    <td key={creatKey(column, item)}> {renderTd(column, item)} </td> 
                )}
            </tr> 
            )
        }

    return <tbody>{ data.map(item=>renderCell(item) )}</tbody>
}

export default TableBody;