export default function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.imagemPerfil} />
        <div class="texto">
          <div class="nome">{props.nomePerfil}</div>
          <div class="razao">
            {!props.situacao ? "Novo no Instagram" : "Segue Você"}
          </div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
