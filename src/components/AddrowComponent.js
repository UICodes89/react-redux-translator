import React, { useState } from "react";
import { toast } from 'react-toastify';


const AddrowComponent = ({ props, toggleAddSection }) => {
    const [lang, setLang] = useState('en');
    const [val, setVal] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        props.actions.toggleLoader({"value":true});
        var urlencoded = new URLSearchParams();
        urlencoded.append("value", val);
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var requestOptions = {
            language: lang,
            options: {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            }
        };
        props.actions.addRow(requestOptions).then(() => {
            props.actions.changeId({ "value": " " });//Remove edit seection  
            toast("Row Added Successfully.")
            setVal("");
            setLang("")
            toggleAddSection();
            props.actions.toggleLoader({"value":false});
        }).catch((err) => {
            alert("Something went wrong!!!", err)
        })
    }
    const onChangehandler = (e) => {
        setVal(e.target.value);
    }

    const onSelectHandler = (e) => {
        setLang(e.target.value);
    }
    return (
        <>
            <form name="addrow" onSubmit={submitHandler} className="add_new_row">
                <h2>Add new entry</h2>
                <select value={lang} onChange={onSelectHandler} className="form-control">
                    {props.langs.map(lang => { return <option key={lang.id} value={lang.language}>{lang.language}</option> })}
                </select>
                <br />
                <textarea type="text" value={val} onChange={onChangehandler} className="col-12" row="12"> </textarea>
                <button type="submit" className="btn sbt-button">Add</button>
            </form>
        </>
    )
}


export default AddrowComponent;