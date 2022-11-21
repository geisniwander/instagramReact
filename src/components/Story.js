export default(function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img alt={props.nomePerfil} src={props.imagemPerfil} />
      </div>
      <div className="usuario">{props.nomePerfil}</div>
    </div>
  );
})();
