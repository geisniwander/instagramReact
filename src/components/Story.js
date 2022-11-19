export default function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagemPerfil} />
      </div>
      <div class="usuario">{props.nomePerfil}</div>
    </div>
  );
}
