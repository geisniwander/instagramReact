export default (function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img alt={props.nomePerfil} src={props.imagemPerfil} />
        <div className="texto">
          <div className="nome">{props.nomePerfil}</div>
          <div className="razao">
            {!props.situacao ? "Novo no Instagram" : "Segue Você"}
          </div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
})();
