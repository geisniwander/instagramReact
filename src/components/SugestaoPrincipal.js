export default function SugestaoPrincipal(props) {
  return (
    <div class="usuario">
      <img src={props.imagemPerfil} />
      <div class="texto">
        <strong>{props.usuarioPerfil}</strong>
        <span>
          {props.nomePerfil}
          <ion-icon name="pencil"></ion-icon>
        </span>
      </div>
    </div>
  );
}
