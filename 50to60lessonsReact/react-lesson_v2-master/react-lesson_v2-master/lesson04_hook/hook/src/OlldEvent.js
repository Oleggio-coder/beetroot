import React from "react";

export default function OlldEvent() {

  const inputText = React.createRef();
  const inputOut = React.createRef();

  const test = 'sasha'

  function ClickOne() {
    console.log('Test')
  }

  function ClickTwo(name) {
    console.log('Hello ' + name)
  }

  function ChangeTest(event) {
    console.log(event.target.value);
  }

  function ShowInput() {
    console.log(inputText.current.value);
    inputOut.current.innerHTML += inputText.current.value;
  }

  return (
    <>
      <section>
        <h2>Click</h2>
        <button onClick={() => { ClickTwo('Sasha') }}>Click</button>
      </section>
      <section>
        <h2>Double Click</h2>
        <button onDoubleClick={ClickOne} onMouseMove={ClickOne}>Click</button>
      </section>
      <section>
        <h2>Input value</h2>
        {/* <input type="text" defaultValue='Test value' onChange={ChangeTest} /> */}
        <p ref={inputOut}>test</p>
        <input type="text" ref={inputText} />
        <button onClick={ShowInput}>Show</button>
      </section>

    </>
  );
}


