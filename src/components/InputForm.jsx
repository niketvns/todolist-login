import React from 'react';
import { Button, Tooltip } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

const InputForm = ({ addItem, inputEvent, input }) => {
    return (
        <div className="input_btn">
            <form onSubmit={addItem}>
                <Tooltip title="Enter Items">
                    <input type="text" placeholder="Add Items" onChange={inputEvent} value={input} />
                </Tooltip>
                <Tooltip title="Add">
                    <IconButton
                        aria-label="add"
                        size="small"
                        type="submit"
                        style={{ backgroundColor: 'white' }}
                    >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
            </form>
        </div>
    )
}

export default InputForm;