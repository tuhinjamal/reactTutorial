// console.log("====================================");
// console.log(React);
// console.log(ReactDOM);
// console.log("====================================");

// const domContainer = document.querySelector("#root");

// React libaray has given us some userful funtion By using these useful function  we can make React element  one of this element name React.createElement

// const myElement = React.createElement("div", null, [
//   React.createElement("p", null, "Hello world Tuhin"),
//   [React.createElement("p", null, "Hello world Tuhin")],
// ]);
// ReactDOM.render(myElement, domContainer);

// React has it's own markup syntax called JSX full form is Javascript XML
// const myJSXElement = (
//     <div>
//       <h1 id="displayOne">0</h1>
//       <div>
//         <button class="btn" id="buttonOne">
//           Increment +
//         </button>
//       </div>
//     </div>
//   );
const domContainer = document.querySelector("#root");
const Increment = () => {
  // state
  // const reactState = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <h1 id="displayOne">{counter}</h1>
      <p>this is called interpolation  </p>
      <div>
        <button
          class="btn"
          onClick={() => setCounter(counter + 1)}
          id="buttonOne"
        >
          Increment +
        </button>
      </div>
    </div>
  );
};

// ReactDOM.render(Increment(), domContainer);
ReactDOM.render(
  <div className="container">
    <Increment />
    <Increment />
    <Increment />
  </div>,
  domContainer
);

// let numberOne = 0 ;
// const displayOne = document.querySelector("#displayOne");
// buttonOne.addEventListener("click",()=>{
//     numberOne ++;
//     displayOne.textContent = numberOne;
// });
// still we haven't use state so we are not getting proper advantage of React
