import { useRef } from 'react';
import './App.css';

function App() {
  let btnRef = useRef();
  let input1Ref = useRef();
  let input2Ref = useRef();

  function changecolor() {
    btnRef.current.style.backgroundColor = "red";

    // Get text from first input
    let text = input1Ref.current.value;

    // Put text into second input
    input2Ref.current.value = text;
  }

  return (
    <div>
      <input
        ref={input1Ref}
        type="text"
        placeholder="copy"
      />

      <button ref={btnRef} onClick={changecolor}>
        Copy
      </button>

      <br />

      <input
        ref={input2Ref}
        type="text"
        placeholder="paste"
      />
    </div>
  );
}

export default App;