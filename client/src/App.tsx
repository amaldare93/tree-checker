import { useEffect } from "react";
import "./App.css";

function App() {
  async function getData() {
    const url = "http://localhost:8080/trees";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function postData() {
    const url = "http://localhost:8080/trees";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address: "709 Rockaway St",
        }),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Tree Checker</h1>
      <p>
        This is a small app to facilitate data entry for PHS tree checking
        operations.
      </p>
      <button onClick={postData}>Add a Tree</button>
    </>
  );
}

export default App;
