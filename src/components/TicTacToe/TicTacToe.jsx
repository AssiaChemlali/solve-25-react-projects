import React, { useState,useEffect } from 'react'

const TicTacToe = () => {
  const items = [
    { id: '1', player: '' },
    { id: '2', player: '' },
    { id: '3', player: '' },
    { id: '4', player: '' },
    { id: '5', player: '' },
    { id: '6', player: '' },
    { id: '7', player: '' },
    { id: '8', player: '' },
    { id: '9', player: '' }
  ]
  const [boxs, setBoxs] = useState(items)
  const [player, setPlayer] = useState('X')
  const [status,setStatus]=useState('')

  function handleClick(index) {
    const updateBoxs = boxs;
    if (updateBoxs[index].player ||getWinner()) return
    setPlayer(player === 'X' ? 'O' : 'X')
    updateBoxs[index].player = player
    setBoxs(updateBoxs)

  }

  function getWinner(){
    let winner=null;
    const winningPattens = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ]

    for (let i = 0; i < winningPattens.length; i++) {
     const [x,y,z]=winningPattens[i]
      if (boxs[x].player === boxs[y].player
        && boxs[x].player ===boxs[z].player) {
          winner= boxs[x].player
      }
    }

    return winner

  }

  useEffect(()=>{
    if(getWinner()){
      setStatus(`the Winner is Player ${getWinner()}`)
     
    } else if(getWinner()===null && boxs.every((box)=>box.player!=="")){
      setStatus("This is a draw please Restart the game")
    
    } else{
      setStatus(`the Next player is ${player}`)
    }
    

  },[boxs,player])

  function handleRestart() {
    setPlayer('X')
    setBoxs(items)
    setStatus('')
  }

  return (
    <div className='p-10 '>
      <div className='flex flex-wrap w-[150px] h-[150px] mb-5'>{
        boxs?.map((box, index) => {
          return (
            <button
              key={box.id}
              onClick={() => handleClick(index)}
              className='w-1/3 h-1/3 border border-gray-400'>
              {box?.player}
            </button>
          )
        })
      }
      </div>
      
       <p className='py-3 font-bold text-xl'>{status}</p>
      
      <button
        onClick={handleRestart}
        className='bg-black text-white px-4 font-bold py-2'>Restart </button>
    </div>
  )
}

export default TicTacToe
