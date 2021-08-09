import { useState } from "react";

function Count() {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const hasOnlySpecialCharacters = (str) => {
        const pattern = /^[a-zA-Z0-9]+$/;
        return pattern.test(str)
    }

    const wordCount = (str) => {
        return str.split(' ')
            .filter(n => n != '' && hasOnlySpecialCharacters(n))
            .length;
    }

    return (
        <>
            <div className="row">
                <div className="card col-lg-4 col-md-5 col-sm-10 col-10 border border-dark rounded mx-auto mt-5 p-4">
                    <label className="row mb-3 font-18">Input 1</label>
                    <textarea
                        className="row rounded mb-3"
                        onChange={(e) => {
                            setInput1(e.target.value)
                        }}
                    />
                    <h5> Word count: {wordCount(input1)} </h5>
                </div>
                <div className="card col-lg-4 col-md-5 col-sm-10 col-10 border border-dark rounded mx-auto mt-5 p-4">
                    <label className="row mb-3 font-18">Input 2</label>
                    <textarea
                        className="row rounded mb-3"
                        onChange={(e) => {
                            setInput2(e.target.value)
                        }}
                    />
                    <h5> Word count: {wordCount(input2)} </h5>
                </div>
            </div>
            <div className="row col-4 text-center mx-auto mt-5">
                {
                    input1 == input2 ? (
                        <h5>Both input equal</h5>
                    ) : (
                        <h5>Both input not equal</h5>
                    )
                }
            </div>
        </>
    );
}

export default Count;
