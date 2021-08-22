import React from 'react';
const ItemGroup = ({title, completed}) => {
    return ( <li className="list-group-item">{title} - {completed}</li> );
}
 
export default ItemGroup;