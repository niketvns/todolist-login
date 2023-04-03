import React, { useState } from 'react'
import ListAltIcon from '@mui/icons-material/ListAlt';
import { DateTime, InputForm, ListItems } from "../../components";
import { useAlert } from '../../context/alertContext';

const HomePage = () => {
    const [input, setInput] = useState("");
    const [items, setItems] = useState([]);

    const { setAlert } = useAlert();

    const inputEvent = (event) => {
        setInput(event.target.value);
    }

    const addItem = (event) => {
        event.preventDefault();
        if (input === "") {
            setAlert({
                open: true,
                message: "Please Enter an Item",
                type: "error"
            })
            return;
        } else {
            setItems((oldValues) => {
                return [input, ...oldValues]
            })
            setAlert({
                open: true,
                message: "Item added successfully",
                type: "success"
            })
        }
        setInput("");
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrItem, index) => {
                return index !== id;
            })
        })
        setAlert({
            open: true,
            message: "Item Deleted",
            type: "warning"
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="cent_div">
                    <DateTime />
                    <InputForm
                        addItem={addItem}
                        inputEvent={inputEvent}
                        input={input}
                    />
                    <div>
                        <ListAltIcon />
                    </div>
                    <ListItems
                        items={items}
                        deleteItem={deleteItem}
                    />
                </div>
            </div>
        </>
    );
}

export default HomePage;