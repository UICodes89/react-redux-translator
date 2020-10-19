import React from "react";
import TranslateComponent from "./TranslateComponent";
const TableRowComponent = (({ row, selectedRowId, props }) => {
    
    return (
        <>
            <tr>
                <td>{row.id} </td>
                <td>
                    {row.id === Object.values(selectedRowId).join('') ? <TranslateComponent row={row} props={props}  /> : row.value}
                    {row.id !== Object.values(selectedRowId).join('') ? <button onClick={() => props.actions.changeId({ "value": row.id })} className="edit_btn">edit</button> : null}
                </td>
            </tr>
        </>
    )
});

export default TableRowComponent;

