import { useState } from "react";

function Count() {

    const [input1,setInput1 ] = useState("");
    const [input2,setInput2 ] = useState("");

    const countWords = (str) => {
        return str.split(/[\s, ]+/)
        .filter( n => n!='')
        .length
    }

    return (
        <div>
            <div className="row">
                <div className="card border rounded col-lg-4 col-md-5 col-sm-10 col-10 border-dark mx-auto p-4 mt-5">
                    <label className="row font-18">Input 1</label>
                    <textarea 
                        className="row my-3"
                        onChange={(e)=>{
                            setInput1(e.target.value);
                        }} />
                    <h5 className="row">Word Count : {countWords(input1)}</h5>
                </div>
                <div className="card border rounded col-lg-4 col-md-5 col-sm-10 col-10 border-dark mx-auto p-4 mt-5">
                    <label className="row font-18">Input 2</label>
                    <textarea 
                        className="row my-3"
                        onChange={(e)=>{
                            setInput2(e.target.value);
                        }} />
                    <h5 className="row">Word Count : {countWords(input2)}</h5>
                </div>
            </div>
            <div className="row text-center mt-5">
                { input1 == input2 ? (
                    <h5> Both strings equal </h5>
                ) : ( 
                    <h5> Both strings not equal </h5>
                )}
            </div>
        </div>
    );
}

export default Count;
