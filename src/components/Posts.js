import Post from "./Post";

export default function Posts() {
  const dados = [
    {
      imagemPerfil: "assets/img/meowed.svg",
      nomePerfil: "meowed",
      imagemPost: "assets/img/gato-telefone.svg",
      imagemPerfilCurtiu: "assets/img/respondeai.svg",
      perfilCurtiu: "respondeai",
      qtdCurtidas: 10,
    },
    {
      imagemPerfil: "assets/img/barked.svg",
      nomePerfil: "barked",
      imagemPost: "assets/img/dog.svg",
      imagemPerfilCurtiu: "assets/img/adorable_animals.svg",
      perfilCurtiu: "adorable_animals",
      qtdCurtidas: 123120,
    },
  ];
  return (
    <div className="posts">
      {dados.map((p, index) => (
        <Post
          key={index}
          imagemPerfil={p.imagemPerfil}
          nomePerfil={p.nomePerfil}
          imagemPost={p.imagemPost}
          imagemPerfilCurtiu={p.imagemPerfilCurtiu}
          perfilCurtiu={p.perfilCurtiu}
          qtdCurtidas={p.qtdCurtidas}
        />
      ))}
    </div>
  );
}
