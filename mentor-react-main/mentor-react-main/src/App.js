// import logo from "./logo.svg";

// import React, { useState, useEffect } from "react";

// import "./App.css";
// import Layout from "./functionComponent/components/layout";

// function App() {
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);

//   // return <div className="adad">Hello world!</div>; class => className
//   // return <input />; thẻ đóng

//   // Props
//   // function Item(props) {
//   //   const { title, placeholder } = props;

//   //   return (
//   //     <>
//   //       <label>{title}</label>
//   //       <input placeholder={placeholder} />
//   //     </>
//   //   );
//   // }

//   // children

//   function Button({ children }) {
//     console.log(children);
//     return <button>{children}</button>;
//   }

//   function handleCount() {
//     setCount(count + 1);
//   }

//   function handleCount1() {
//     setCount1(count1 + 1);
//   }

//   // useEffect(() => {
//   //   console.log("componentDidMount");
//   // }, []);

//   // useEffect(() => {
//   //   console.log("rerender count1");
//   // }, [count1]);

//   // componentDidMount

//   return (
//     <div>
//       {/* <React.Fragment></React.Fragment> thẻ vô danh */}

//       {/* <Item title="Name" placeholder="Enter Name" />
//       <Item title="Gender" placeholder="Enter Gender" /> */}

//       {/* <Button name="Click" /> */}

//       {/* <Button >
//       </Button> */}

//       {/* <></>  thẻ vô danh */}

//       <Layout />

//       {/* <h1>{count}</h1>

//       <button onClick={handleCount}>Click</button>

//       <h1>{count1}</h1>

//       <button onClick={handleCount1}>Click1</button> */}
//     </div>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, Switch, Link } from "react-router-dom"; // react router v6

import About from "./pages/about";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/not-found";
import Login from "./pages/login";

function App() {
  return (
    <>
      <Link to="/about">Go to about</Link>
      <br />
      <Link to="/login">Go to login</Link>

      <Switch>
        {/* <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} /> */}

        {/* <Route path="/" component={<Home />} />
        <Route path="/login" component={<Login />} />
        <Route path="/about" component={<About />} />
        <Route path="/dashboard" component={<Dashboard />} />
        <Route path="*" component={<NotFound />} /> */}
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/dasboard">
          <Dashboard />
        </Route>
      </Switch>
    </>
  );
}

export default App;
