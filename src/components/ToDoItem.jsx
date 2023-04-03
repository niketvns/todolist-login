import React, { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';
import { Tooltip } from "@mui/material";
import { useAlert } from "../context/alertContext";


const ToDoItem = (props) => {
    const [listItemStyle, setListItemStyle] = useState('normal')
    const [bgcolor, setbgColor] = useState("white");
    const [color, setColor] = useState("cornflowerblue");

    const { setAlert } = useAlert();

    const markCompleted = () => {
        if (listItemStyle === 'normal') {
            setListItemStyle('completed')
            setbgColor("green");
            setColor("white");
            setAlert({
                open: true,
                message: "Mark as completed",
                type: "info"
            })
        } else {
            setListItemStyle('normal')
            setbgColor("white");
            setColor("cornflowerblue");
            setAlert({
                open: true,
                message: "Mark as Incomplete",
                type: "info"
            })
        }
    }

    return (
        <>
            <div className="todoitem">
                <Tooltip title="Done">
                    <CheckIcon className="mark_completed_btn" onClick={markCompleted}
                        style={{ backgroundColor: bgcolor, color: color }}
                    />
                </Tooltip>
                <li className={listItemStyle}>{props.text}</li>
                <Tooltip title="Delete">
                    <div className="delete-btn-box">
                        <DeleteIcon className="del_btn"
                            onClick={() => {
                                props.onSelect(props.id);
                            }}
                        />
                    </div>
                </Tooltip>
            </div>
        </>
    );
};

export default ToDoItem;