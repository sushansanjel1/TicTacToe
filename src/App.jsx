import { useState } from "react"
import Box from "./components/Box";

function App() {
    const[isNext , setIsNext] = useState(true);
    const [value ,setValue] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    const handleClick = (i) => {

      if (value[i] || winner) return ; // Does nothing if the box already has value [i.e prevents flipping]
                                      // Also prevents moves when there is a winner
      const newValue = [...value];
      newValue[i] = isNext?'X': 'O';
      setValue(newValue);
      setIsNext(prev => !prev);
      calculateWinner(newValue);
    }

    const restartClick = () => {
                                  setValue(Array(9).fill(null));
                                  setWinner(null);
                                  setIsNext(true);
    }

  const calculateWinner = (Board) => {
     const winningPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
     ]
        for(let pattern of winningPattern){
                const [a , b, c] = pattern;
                if(Board[a] && Board[b] && Board[c]){  //Checks if the values are null
                  if(Board[a]===Board[b] && Board[b]===Board[c]){
                  console.log(`Winner is ${Board[a]}`);
                  setWinner(Board[a]);
                }
                }
        }

  }
                                                   
                                                       

  return (
    <>
      <h1 style={{textAlign: "center"}}>Tic-Tac-Toe</h1>
      <div className="container">
            
            <Box handleClick = {() => handleClick(0)} value ={value[0]}/>
            <Box handleClick = {() => handleClick(1)} value ={value[1]}/>
            <Box handleClick = {() => handleClick(2)} value ={value[2]}/>
            <Box handleClick = {() => handleClick(3)} value ={value[3]}/>
            <Box handleClick = {() => handleClick(4)} value ={value[4]}/>
            <Box handleClick = {() => handleClick(5)} value ={value[5]}/>
            <Box handleClick = {() => handleClick(6)} value ={value[6]}/>
            <Box handleClick = {() => handleClick(7)} value ={value[7]}/>
            <Box handleClick = {() => handleClick(8)} value ={value[8]}/>
      </div>
      <div className="winnerContainer">
      <button className="winner"> Winner:{winner}</button>
      <button className="restart" onClick={() => restartClick()}>Restart</button>
      </div>
      <div className="copyright">Made by Sushan Sanjel</div>
    </>
  )
}

export default App
