import React from 'react';
import ToDoItem from './ToDoItem'

const ListItems = ({ items, deleteItem }) => {
    return (
        <div className="all-list-items">
            {
                items.map((val, index) => {
                    return <ToDoItem
                        text={val}
                        id={index}
                        key={index}
                        onSelect={deleteItem}
                    />
                })
            }
        </div>
    )
}

export default ListItems;