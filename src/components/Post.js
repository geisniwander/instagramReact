import { useState } from "react";

export default function Post(props) {
  const bookmarkOutline = "bookmark-outline";
  const [salvar, setSalvar] = useState(bookmarkOutline);
  const [curtir, setCurtir] = useState("naoCurtido");
  const [botaoCurtir, setBotaoCurtir] = useState("heart-outline");
  const [qtdCurtir, setQtdCurtir] = useState(props.qtdCurtidas);

  function salvarPost() {
    if (salvar ===bookmarkOutline){setSalvar("bookmark");}
    else{setSalvar(bookmarkOutline);}
  }

  function curtirPost(identificador) {
    if (curtir === "naoCurtido") {
      setCurtir("curtido");
      setBotaoCurtir("heart");
      setQtdCurtir(qtdCurtir + 1);
    } else {
      if (identificador === "botao") {
        setCurtir("naoCurtido");
        setBotaoCurtir("heart-outline");
        setQtdCurtir(qtdCurtir - 1);
      } else{return;}
    }
  }

  return (
    <div className="post" data-test="post">
      <div className="topo">
        <div className="usuario">
          <img alt="imagem-perfil" src={props.imagemPerfil} />
          {props.nomePerfil}
        </div>
        <div className="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div className="conteudo">
        <img alt="imagem-post"
          src={props.imagemPost}
          onClick={() => curtirPost("img")}
          data-test="post-image"
        />
      </div>

      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon
              class={curtir}
              name={botaoCurtir}
              onClick={() => curtirPost("botao")}
              data-test="like-post"
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              name={salvar}
              onClick={salvarPost}
              data-test="save-post"
            ></ion-icon>
          </div>
        </div>
        <div className="curtidas">
          <img alt={props.perfilCurtiu} src={props.imagemPerfilCurtiu} />
          <div className="texto">
            Curtido por <strong>{props.perfilCurtiu}</strong> e{" "}
            <strong>
              outras <span data-test="likes-number">{qtdCurtir}</span> pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
