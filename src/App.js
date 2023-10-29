
import { useEffect, useState } from 'react';
import './App.css';

const Square=(props)=>{

  return(
    <button className='square'  style={{ color: props.value === 'X' ? 'blue' : 'orange'}} onClick={props.onClicked}>
      {props.value}
    </button>
  )
}


const Board=()=>{
  const initial=[null,null,null,null,null,null,null,null,null];
  const [sq,setsq]=useState(initial);
  const [Xturn,setXturn]=useState(true);
  const win=winner(sq);
 
  const whenclicked = (i)=>{
    
   if(win || Boolean(sq[i])){
    return;}
    
    const newsq=[...sq];
    newsq[i]= Xturn?'X':'O';
    setsq(newsq);
    setXturn(!Xturn);
   
    
   
  }

  function Rendersquare(i){
    return(
    <Square
     value={sq[i]}
     onClicked={()=>whenclicked(i)}
     />
    )
  }
  
  let turn= `PLAYER :   ${ Xturn? "X":'O'}`
 
  if(win===true){
    turn='GAME OVER'
    
   }
  
   function Alert(){
    if(win===true){
      const m=`${Xturn?'O':'X'} is the winner`
      return(
        <div id="winbox" >
        {m}
        </div>
      )
    }
    return;
   }
   
   
  
  return (
    
    <div className='board'>
     
      <div id = 'turn' style={{ background:win?'red':!Xturn?'rgb(180,120,10)':'rgb(15 ,15 ,120)', fontSize: '20px' ,}}>{turn}</div>
       
      <div className='row'>
      {Rendersquare(0)}
      {Rendersquare(1)}
      {Rendersquare(2)}
      </div>
      <div className='row'>
      {Rendersquare(3)}
      {Rendersquare(4)}
      {Rendersquare(5)}
      </div>
      <div className='row'>
      {Rendersquare(6)}
      {Rendersquare(7)}
      {Rendersquare(8)}
      </div>  
      <div id ='n' ><Alert/></div>
     
    </div>
  )
}

function winner(sq){
  const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[1,4,7],[0,3,6],[2,5,8]]
  for (let line of lines){
    const[a,b,c]=line;
    if(sq[a] && sq[a]===sq[b] && sq[a]===sq[c]){
      return true;
    }
  }
  return false;
}

function App() {
  return (
   <div className='game'>
    <div id='title'><span style={{color:'blue'}}>Tic</span><span style={{color:'orange'}}>-Tac-</span><span style={{color:'blue'}}>Toe</span></div>
    <Board/>
  
    <button id="new" onClick={()=>{window.location.reload()}}>New Game</button>
    </div>

  );
}

export default App;
