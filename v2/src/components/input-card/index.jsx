import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStringOne , addStringTwo } from "../../redux/actions/count";

function Card(props) {
    const dispatch = useDispatch();

    const [ input, setInput ] = useState("");
    
    const wordCount = (str) => {
        return str.split(/[\s, ]+/)
        .filter(n => n!='')
        .length;
    }

    return (
        <div className="card p-4 col-lg-4 col-md-5 col-sm-10 col-10 mx-auto mt-2 border border-dark rounded">
            <label className="row font-18">{props.label}</label>
            <textarea className="row rounded my-3" 
                onChange={(e)=>{
                    setInput(e.target.value);
                    props.label == "Input 1" ? dispatch(addStringOne(e.target.value)) : dispatch(addStringTwo(e.target.value));
                }} />
            <h5 className> Word Count : { wordCount(input) } </h5>
        </div>
    );
}

export default Card;
