import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";

function App() {
  // const [data, setData] = useState([]);

  // const getData = async () => {
  //   let response = await fetch("https://fakestoreapi.com/products");
  //   response = await response.json();
  //   console.log(response);
  // };

  // useEffect(() => {
  //   getData();
  // });
  return (
    <>
      <Layout></Layout>
    </>
  );
}

export default App;
