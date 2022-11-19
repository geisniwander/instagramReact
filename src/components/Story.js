export default function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.imagemPerfil} />
      </div>
      <div className="usuario">{props.nomePerfil}</div>
    </div>
  );
}
