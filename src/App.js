import Canvas from "./canvas";
import CustomizerPage from "./pages/CustomizerPage";
import HomePage from "./pages/HomePage";


function App() {
  return (
    <main className="app transition-all ease-in">
      <HomePage />
      <Canvas />
      <CustomizerPage />
    </main>
  );
}

export default App;
