import './navbar.css'

function BarraNavegacao() {
  console.log("Renderizou barra navegação")
  let search = window.location.search;
  let params = new URLSearchParams(search);
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

  console.log(quadros.map((quadro, indice) => 
  <p {...indice===quadroSelecionado? "className=quadro selecionado" : "className=quadro" }
  key={indice}
  >
      {quadro.titulo}
  </p>))

  return (
    <div className="barraNavegacao">
      {quadros.map((quadro, indice) => 
        <a className={indice===quadroSelecionado ? "quadro selecionado" : "quadro" }
        key={indice} href={'/?quadro='+indice.toString()}
        >
            {quadro.titulo}
        </a>)}
        <a className="quadro criaQuadro"
        key='+' href={'/criaQuadro'}
        >
            +
        </a>
      </div>
  )
}

export default BarraNavegacao;
