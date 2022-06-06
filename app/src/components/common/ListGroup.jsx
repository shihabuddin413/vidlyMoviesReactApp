import React from 'react';

function ListGroup(props) {
    const {items, textProp, valueProp, onItemSelect, selectedItem}=props

    let getListItemClass = (item) => `cp list-group-item ${selectedItem[textProp] ===item[textProp] ? 'active':''}`
    
    
    return ( 
        <div>
            <p className='text-secondary'>Available Genres</p>
            <ul className="list-group">
                {items.map( item =>  
                    <li key={item[valueProp]} 
                        onClick={()=>onItemSelect(item)}
                        className={ getListItemClass(item) + ' list-group-item-action' } >
                        {item[textProp]}
                    </li> 
                )}
            </ul> 
        </div>
        
    );
}

ListGroup.defaultProps = {
    textProp: 'name',
    valueProp:'_id'
}

export default ListGroup;