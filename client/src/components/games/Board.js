import React from 'react'


const renderCel = (makeMove, rowIndex, cellIndex, symbol) => {
  
  return (
    <button
      className="board-tile"

      onClick={() => makeMove(rowIndex, cellIndex)}
      key={`${rowIndex}-${cellIndex}`}
    >{symbol}</button>
  )
}


export default ({board, makeMove}) => board.map((cells, rowIndex) =>
  <div key={rowIndex}>
    {cells.map((symbol, cellIndex) => renderCel(makeMove, rowIndex, cellIndex,symbol,false))}
  </div>
)
