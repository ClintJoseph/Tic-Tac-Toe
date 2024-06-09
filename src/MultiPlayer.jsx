
import {useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Square from './Square';
import { winner, nowinner } from './utils';
import { Link, useNavigate } from 'react-router-dom';





const MBoard=()=>{
  const initial=[null,null,null,null,null,null,null,null,null];
  const [sq,setsq]=useState(initial);
  const [Xturn,setXturn]=useState(true);
  const win=winner(sq);
  console.log(win);


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

  if(win===true || nowinner(sq)){
    turn='GAME OVER'
    
   }

   
   function Alert(){
    let m= false
    if(win===true){
      m=`${Xturn?'O':'X'} is the winner`
    }
      else if(nowinner(sq)){
      m='No Winner'
      }
      return(
        <div>
          <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="scare"
        >
           {m &&
        <div id="winbox" >
        {m}
        </div>}
        </motion.div>
       
        </div>
      );
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



function MultiPlayer() {
  const navigate = useNavigate()
  return (
   <div className='game'>
    <div id='title'><span style={{color:'blue'}}>Tic</span><span style={{color:'orange'}}>-Tac-</span><span style={{color:'blue'}}>Toe</span></div>
    <MBoard/>
    <button id="new" onClick={()=>{window.location.reload()}}>New Game</button>
    <button id = "new" onClick = {()=>navigate('/singleplayer')}>vsComputer</button>
    </div>

  );
}



export default MultiPlayer;
