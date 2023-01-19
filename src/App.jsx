import axios from "axios";
import { useState } from "react";

function App() {
  const [filme,setFilme] = useState(null)
  
  
  function buscar(){
    let movie = Math.floor(Math.random() * 1000)
    axios.get(`https://api.themoviedb.org/3/movie/${movie}?api_key=aa1a0f839084aeb9610a689f0b01c8be&language=pt-BR`,).then(({data}) =>{
      setFilme(data);
    })
    }
  return (
    <div className="app">
        <div className="container">
          <div className="titulo">
            <div className="logo"></div>
            <h1>Não sabe o que assistir?</h1>
          </div>
          {filme && 
                <section className="catalogo">
                  <img className="banner" src={"https://image.tmdb.org/t/p/w500/"+filme.backdrop_path}></img>
                  <div className="overview">
                    <h2>{filme.title}</h2>
                    <p>{filme.overview}</p>
                  </div>
                </section>
          }
          <button className="btn-procurar" onClick={buscar}><div className="logo"></div> Encontrar Filme</button>
          <p>Clique em "Encontrar filme" que traremos informações
            de algum filme para você assistir hoje.</p>
        </div>
    </div>
  );
}

export default App;
