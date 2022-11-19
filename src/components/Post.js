import ConteudoPost from "./ConteudoPost";
import FundoPost from "./FundoPost";
import TopoPost from "./TopoPost";

export default function Post(props){
    return(
    <div class="post">
        <TopoPost imagem={props.imagemPerfil} nome={props.nomePerfil}/>
        <ConteudoPost imagem={props.imagemPost}/>
        <FundoPost perfil={props.perfilCurtiu} curtidas={props.qtdCurtidas}/>
    </div>
    )
}