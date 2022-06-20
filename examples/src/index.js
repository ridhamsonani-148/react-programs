// var React = require('react');
//import { Message } from '@mui/icons-material';
import React from 'react';
// var ReactDOM = require('react-dom');
import ReactDOM from 'react-dom';

// ****** prog 1 - understanding of jsx *******//

// ReactDOM.render(<h1> Hello World!</h1>,
//     document.getElementById("root"));
  
// actual react code 
// ReactDOM.render( React.createElement("h1", null, " Hello World!"), document.getElementById("root"));

// var h1 = document.createElement("h1");
// h1.innerHTML = 'Ridham';
// document.getElementById("root").appendChild(h1);


//***** prog 2 - render multiple elements ***** //
// ReactDOM.render(
//               <>           
//                 <h1> Hello World!</h1>
//                 <p> Ridham </p>
//               </>, 
//                 document.getElementById("root"));

    
//**** tutorial 1 ******//
// ReactDOM.render(
//     <>
//       <h1> My Top Netflix Pick</h1>
//       <p> List of 5 Best Series</p>
//       <ol>
//         <li>Dark</li>
//         <li>Mr Robot</li>
//         <li>Stranger things</li>
//         <li>Breaking Bad</li>
//         <li>Extra curricular</li>
//       </ol>
//     </>,
//     document.getElementById('root')
// );

//***************************prog 3  ************************* //
// const fname = 'Ridham';
// const lname = 'Sonani';
// ReactDOM.render(  
//                 <>
//                   <h1> My Name is {`${fname} ${lname}`} </h1>
//                   <p> the sum of 2 and 3 is {2+3}</p>
//                 </>        
//                  , 
//                   document.getElementById("root"));


//******tutorial-2 *****//
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1> Ridham Sonani</h1>
//     <p> Current Date : {currDate}</p>
//     <p> Current Time : {currTime}</p>
//   </>
//   , document.getElementById("root")
// );
  

//**** jsx-attributes prog-4 ****//
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://picsum.photos/";
// ReactDOM.render(
//   <>
//   <h1 contentEditable="true"> My name is Ridham</h1>
//   <img src={img1} alt="randomImages"/>
//   <img src={img2} alt="randomImages"/>
//   <a href={link} target="_blank">
//   <img src={img3} alt="randomImages"/>
//   </a>
//   </>
//   ,document.getElementById("root")
// );


//**** css prog-5 ****//
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://picsum.photos/";
// ReactDOM.render(
//   <>
//   <h1 className="heading"> My name is Ridham</h1>
//    <div className="img_div">
//   <img src={img1} alt="randomImages"/>
//   <img src={img2} alt="randomImages"/>
//   <a href={link} target="_blank">
//   <img src={img3} alt="randomImages"/>
//   </a>
//   </div>
//   </>
//   ,document.getElementById("root")
// );

//*****inline style css prog-6 ******//
// const img1 = "https://picsum.photos/200/300";
// const img2 = "https://picsum.photos/250/300";
// const img3 = "https://picsum.photos/300/300";
// const link = "https://picsum.photos/";

// const heading = {
//   color: "#fa9191",
//   textAlign: "center",
//   textTransform: "capitalize",
//   fontWeight: "bold",
//   textShadow: "0px 2px 4px #ffe9c5",
//   margin: "50px 0px",
//   fontFamily: "'Barlow', sans-serif"
// };
// ReactDOM.render(
//   <>
//   <h1 style = {heading}> My name is Ridham</h1>
//   <div className="img_div">
//   <img src={img1} alt="randomImages"/>
//   <img src={img2} alt="randomImages"/>
//   <a href={link} target="_blank">
//   <img src={img3} alt="randomImages"/>
//   </a>
//   </div>
//   </>
//   ,document.getElementById("root")
// );

// create simple greeting site//

//**********components in react *********//
// // import Heading from './Heading';
// // import Para from './Para';
// import App from './App';
// ReactDOM.render(
//   <>
//     <App />
//   </>
//   ,document.getElementById("root")
// );

//**** Es6 import-export *****//
// import name,{pname,myname} from './obj';

// ReactDOM.render(
//     <>
//         <ol>
//             <li> Ridham</li>
//             <li>{name}</li>
//             <li>{pname}</li>
//             <li>{myname()}</li>
//         </ol>
//     </>
//     ,document.getElementById("root")
// );

//***create simple calculator ******//
// import add,{sub,div,mult} from './calc';
// ReactDOM.render(
//     <>
//         <ul>
//             <li>Ths sum of two no is {add(4,40)}</li>
//             <li>Ths sub of two no is {sub(4,40)}</li>
//             <li>Ths div of two no is {div(5,3)}</li>
//             <li>Ths mult of two no is {mult(4,40)}</li>
//         </ul>
//     </>
//     ,document.getElementById("root")
// );


//******hooks in react ******//
// import Hooks from './Hooks';
// ReactDOM.render(
//     <>
//         <Hooks />
//     </>
//      ,document.getElementById("root")
// )


//**** prog using hooks *****//
// import Hook_prog from './Hook_prog';
// ReactDOM.render(
//     <>
//         <Hook_prog />
//     </>
//     ,document.getElementById("root")
// )

//**** Events in React js Tutorial ****//
// import Events from './Events';
// import './Events.css';
// ReactDOM.render(
//     <>
//         <Events />
//     </>
//     ,document.getElementById("root")
// );

//**** React Forms  ****//
// import Forms from './Forms.jsx';
// import './Events.css';
// ReactDOM.render(
//     <>
//         <Forms />
//     </>
//     ,document.getElementById("root")
// )


//*** tutorial state variable button ******//
// import Variable from './Variable';

// ReactDOM.render(
//     <>
//         <Variable />
//     </>
//     ,document.getElementById("root")
// )

//****  Todo list uding material ui *****//
// import ToDoList from './ToDoList';
// import './ToDoList.css';
// ReactDOM.render(
//     <>
//         <ToDoList />
//     </>
//     ,document.getElementById("root")
// )

//***** Accordian  ******//
// import Accordian from './components/accordian/Accordian';
// import './components/accordian/accordian.css'
// ReactDOM.render(
//     <>
//         <Accordian />
//     </>
//     ,document.getElementById("root")
// )

//*** class components ****//
// import Message from './Message';
// ReactDOM.render(
//     <>
//         <Message />
//     </>
//     ,document.getElementById("root")
// )

//***setstate  ****//
// import Counter from './Counter';
// ReactDOM.render(
//     <>
//     <Counter />
//     </>
//     ,document.getElementById("root")
// )