import { useContext } from "react";
import Kosar from "./components/Kosar";
import Vasarloter from "./components/Vasarloter";
import { ApiContext } from "./context/ApiContext";
import { KosarContext } from "./context/KosarContext";

function App() {
  const {termekLista }=useContext(ApiContext)
  const {kosarTermekLista}=useContext(KosarContext)
  return (
    <div className="container">
      <header>
        <h1>FakeStore</h1>
      </header>
      <main className="row">
        <article className="col-lg-8">
          <h4>Vásárlótér</h4>
          <Vasarloter termekLista={termekLista}/>
        </article> 
        <aside className="col-lg-4">
          <h4>Kosár</h4>
          <Kosar kosarTermekLista={kosarTermekLista}/>
        </aside> 
      </main>
      </div>
  );
}

export default App;
