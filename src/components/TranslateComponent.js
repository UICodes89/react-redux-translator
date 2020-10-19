import React, { useState } from "react";
import { toast } from 'react-toastify';

const TranslateComponent = ({ row, props}) => {
    const [val, setVal] = useState(row.value);

    const submitHandler = (e) => {
        e.preventDefault();
        props.actions.toggleLoader({"value":true});
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        var urlencoded = new URLSearchParams();
        urlencoded.append("value", val);

        var requestOptions = {
            language: row.language,
            lang_id: row.id,
            options: {
                method: 'PUT',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            }
        };
        props.actions.updateRow(requestOptions).then(() => {
            props.actions.changeId({ "value": "No Change" });//Remove edit seection 
            toast("Row Updated Successfully.")
            props.actions.toggleLoader({"value":false});
        }).catch((err) => {
            alert("Something went wrong!!!", err)
        })
    }
    const onChangehandler = (e) => {
        setVal(e.target.value);
    }
    return (
        <>
            <form name="translate" onSubmit={submitHandler}>
                <input type="text" value={val} onChange={onChangehandler} className="edit_input"/>
                <button type="submit " className="edit_btn tanslate">Translate</button>
                <button type="button" className="edit_btn" onClick={() => props.actions.changeId({ "value": "No Change" })}>Cancel</button>
            </form>
        </>
    )
}


export default TranslateComponent;