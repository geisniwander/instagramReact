import Post from "./Post"

export default function Posts(){
    const dados = [{imagemPerfil:"assets/img/meowed.svg",nomePerfil:"meowed",imagemPost:"assets/img/gato-telefone.svg",perfilCurtiu:"respondeai",qtdCurtidas:0},
    {imagemPerfil:"assets/img/barked.svg",nomePerfil:"barked",imagemPost:"assets/img/dog.svg",perfilCurtiu:"adorable_animals",qtdCurtidas:0}]
    return(
        <div class="posts">
            {dados.map((p)=> <Post imagemPerfil={p.imagemPerfil} nomePerfil={p.nomePerfil} imagemPost={p.imagemPost} perfilCurtiu={p.perfilCurtiu} qtdCurtidas={p.qtdCurtidas} />)}
      </div>
    )
}