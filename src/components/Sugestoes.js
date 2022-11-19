import Sugestao from "./Sugestao";

export default function Sugestoes() {
  const dados = [
    {
      imagemPerfil: "assets/img/bad.vibes.memes.svg",
      nomePerfil: "bad.vibes.memes",
      situacao: true,
    },
    {
      imagemPerfil: "assets/img/chibirdart.svg",
      nomePerfil: "chibirdart",
      situacao: true,
    },
    {
      imagemPerfil: "assets/img/razoesparaacreditar.svg",
      nomePerfil: "razoesparaacreditar",
      situacao: false,
    },
    {
      imagemPerfil: "assets/img/adorable_animals.svg",
      nomePerfil: "adorable_animals",
      situacao: true,
    },
    {
      imagemPerfil: "assets/img/smallcutecats.svg",
      nomePerfil: "smallcutecats",
      situacao: true,
    },
  ];
  return (
    <div class="sugestoes">
      <div class="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>
      {dados.map((s) => (
        <Sugestao
          imagemPerfil={s.imagemPerfil}
          nomePerfil={s.nomePerfil}
          situacao={s.situacao}
        />
      ))}
    </div>
  );
}
