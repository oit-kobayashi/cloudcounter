import './App.css';
import { SetStateAction, useState } from 'react';

const IncButton = ({diff, val, setVal}: {
  diff: number,
  val: number,
  setVal:  React.Dispatch<SetStateAction<number>> 
}) => {
  const clicked = () => {
    setVal(val + diff);
  }
  return(
    <button onClick={clicked}>{diff}</button>
  );
};
function App() {
  const [cnt, setCnt] = useState(0);
  return (
    <div className="App">
      <IncButton diff={-1} val={cnt} setVal={setCnt}/>
      {cnt}
      <IncButton diff={1} val={cnt} setVal={setCnt}/>
    </div>
  );
}

export default App;
