import { CharacterList } from "./components/CharacterList";

function App() {
  return (
    <div className="bg-dark text-warning">
      <h1 className="text-center display-1 py-5">Rick And Morty</h1>
      <CharacterList />
    </div>
  );
}

export default App;
