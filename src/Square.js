export default function Square({ value, onSquareClick }) {
  return (
    <div>
      <button className='squares' onClick={ onSquareClick }>
        { value }
      </button>
    </div>
  )
}