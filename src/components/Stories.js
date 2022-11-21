import Story from "./Story";

export default (function Stories() {
  const dados = [
    { imagemPerfil: "assets/img/9gag.svg", nomePerfil: "9gag" },
    { imagemPerfil: "assets/img/meowed.svg", nomePerfil: "meowed" },
    { imagemPerfil: "assets/img/barked.svg", nomePerfil: "barked" },
    {
      imagemPerfil: "assets/img/nathanwpylestrangeplanet.svg",
      nomePerfil: "nathanwpylestrangeplanet",
    },
    { imagemPerfil: "assets/img/wawawicomics.svg", nomePerfil: "wawawicomics" },
    { imagemPerfil: "assets/img/respondeai.svg", nomePerfil: "respondeai" },
    { imagemPerfil: "assets/img/filomoderna.svg", nomePerfil: "filomoderna" },
    {
      imagemPerfil: "assets/img/memeriagourmet.svg",
      nomePerfil: "memeriagourmet",
    },
  ];

  return (
    <div className="stories">
      {dados.map((s, index) => (
        <Story
          key={index}
          imagemPerfil={s.imagemPerfil}
          nomePerfil={s.nomePerfil}
        />
      ))}
      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
})();
