export function winner(sq){
    const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[1,4,7],[0,3,6],[2,5,8]]
    for (let line of lines){
      const [a,b,c]=line;
      if(sq[a] && sq[a]===sq[b] && sq[a]===sq[c]){
        return true;
      }
    }
    return false;
  }

  function checkwinner(sq,ch){
    const lines=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[6,4,2],[1,4,7],[0,3,6],[2,5,8]]
    for (let line of lines){
      const [a,b,c]=line;
      if(sq[c]===ch && sq[a] && sq[a]===sq[b] && sq[a]===sq[c]){
        return true;
      }
    }
    return false;
  }
  
  export function nowinner(sq){
    for (let i of sq){
      if(i==null){
        return false;
      }
      
    }
    return true
  }


  
  export function computermove(sq){
    let arr = [...sq]

    for (let i = 0;i<arr.length;i++){
      if(arr[i] === null){
        arr[i]='O';
        if(checkwinner(arr,'O'))
          return i;
        arr[i] = null;
      }}

      for (let i = 0;i<arr.length;i++){
        if(arr[i]===null){
          arr[i]='X';
          if(checkwinner(arr,'X'))
            return i;
          arr[i] =null;
        }}

      if(arr[4] === null){
        return 4
      }

    for (let i = 0;i<arr.length;i++){
        if(arr[i]===null){
         return i
        }}

    }
     
   
    
  
 