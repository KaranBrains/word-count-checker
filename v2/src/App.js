import { useSelector } from 'react-redux';
import './App.css';
import Card from "./components/input-card/index";

function App() {
  
  const string1 = useSelector((state) => state?.countReducer?.string1);
  const string2 = useSelector((state) => state?.countReducer?.string2);

  return (
    <>
      <div className="row col-12">
        <Card label="Input 1" />
        <Card label="Input 2" />
      </div>
      <div className="mt-5 text-center mx-auto">
        { string1 == string2 ? (
         <h3>Equal</h3> 
        ) : (
          <h3>Not Equal</h3>
        )}
      </div>
    </>
  );
}

export default App;
