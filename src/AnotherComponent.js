import './App.css';

function AnotherComponent({ status, onClick }) {
  return (
    <button
      className={`button ${status ? 'button--ok' : 'button--ng'}`}
      onClick={onClick}
    >
      Status is {status ? 'OK' : 'NG'}
    </button>
  )
}

export default AnotherComponent
