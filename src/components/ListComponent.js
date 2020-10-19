import React from "react";
import TableRowComponent from "./TableRowComponent";

const ListComponent = ({ list, props }) => {
    const { rowId, } = props;
    // selectedRowId={rowId} onChangeRowId={(rowId)=>this.props.actions.changeId(rowId)}

    return (
        list ?
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Value</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(item => { return item.value ? <TableRowComponent key={Math.random(1000) + item.id} row={item} selectedRowId={rowId} props={props} /> : null })}
                </tbody>
            </table> : null
    )
}

export default ListComponent