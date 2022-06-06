import React from 'react';
import Like from '../common/Like';
import ReactableTable from '../common/Table';
import { Link } from "react-router-dom";

function MoviesTable(props) {

    let {
        movies,
        onDelete,
        onLike,
        onSort,
        sortColumn
    } = props

    const columns = [
        {
            path: 'title',
            label: 'Title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'In Stock' },
        { path: 'dailyRentalRate', label: 'Daily Rental' },
        {
            key: "Like",
            content: item => <Like liked={item.liked} job={() => onLike(item)} />
        },
        {
            key: "Delete",
            content: item => <button onClick={() => onDelete(item)} className='btn btn-danger'>Delete</button>
        }
    ]

    return (
        <div>
            <ReactableTable
                columns={columns}
                sortColumn={sortColumn}
                onSort={onSort}
                data={movies}
            />
        </div>
    );
}

export default MoviesTable;





















/*
 
       <TableHeader columns={columns} sortColumn={sortColumn} onSort={onSort} />
           <TableBody columns={columns} data={movies} />


 
<tbody>
               { movies.map((item)=>{
                   return( 
                       <tr key={item._id}>
                           <td>{item.title}</td>
                           <td>{item.genre.name}</td>
                           <td>{item.numberInStock}</td>
                           <td>${item.dailyRentalRate}</td>
                           <td>
                               <Like liked={item.liked} 
                                   job={()=>onLike(item)} 
                               />
                           </td>
                           <td>
                               <button 
                                   onClick={ ()=> onDelete(item) }
                                   className='btn btn-danger'
                               >Delete</button>
                           </td>
                       </tr>
                   )
               })}
           </tbody> */