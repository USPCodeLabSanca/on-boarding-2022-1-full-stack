import './navbar.css'
import { useCookies } from "react-cookie";

function BarraNavegacao() {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  const [removeCookie, setCookie] = useCookies(["user"]);

  //Hardcodei os quadros pra testar
  const quadros = [{titulo:"Quadro daora"}, {titulo:"Outro Quadro"}, {titulo:"Olha so, um quadro"}]

  // Olha a variavel quadro no parametro get
  // Se nenhum quadro ta setado, usa o valor padrao de 0
  let quadroSelecionado;
  if (!params.get("quadro") || isNaN(params.get("quadro"))) {
      quadroSelecionado = 0;
  }
  else {
      quadroSelecionado = parseInt(params.get("quadro"), 10);
  }

  function handleRemoveCookie() {
    setCookie("user", '', {path:'/'});
  }

  return (
    <div className="barraNavegacao">
      {quadros.map((quadro, indice) => 
        <a className={indice===quadroSelecionado ? "quadro selecionado" : "quadro" }
        key={indice} href={'/?quadro='+indice.toString()}>
            {quadro.titulo}
        </a>)}
        <a className="quadro criaQuadro" key='+' href={'/criaQuadro'}>
            +
        </a>
        <button className="quadro logout"  key='logout' 
        onClick={() => {handleRemoveCookie()}}>
            Logout
        </button>
      </div>
  )
}

export default BarraNavegacao;
