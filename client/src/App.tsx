import NavBar from "./components/NavBar";
import TreeCreateScreen from "./screens/TreeCreateScreen";

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-12 mx-4">
        <TreeCreateScreen />
      </div>
    </>
  );
}

export default App;
