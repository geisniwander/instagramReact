import { useState } from "react";

export default function Post(props) {
  const [salvar, setSalvar] = useState("bookmark-outline");
  const [curtir, setCurtir] = useState("naoCurtido");
  const [botaoCurtir, setBotaoCurtir] = useState("heart-outline");
  const [qtdCurtir, setQtdCurtir] = useState(props.qtdCurtidas);

  function salvarPost() {
    if (salvar === "bookmark-outline") setSalvar("bookmark");
    else setSalvar("bookmark-outline");
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
      } else return;
    }
  }

  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imagemPerfil} />
          {props.nomePerfil}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagemPost} onClick={() => curtirPost("img")} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              class={curtir}
              name={botaoCurtir}
              onClick={() => curtirPost("botao")}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name={salvar} onClick={salvarPost}></ion-icon>
          </div>
        </div>
        <div class="curtidas">
          <img src={props.imagemPerfilCurtiu} />
          <div class="texto">
            Curtido por <strong>{props.perfilCurtiu}</strong> e{" "}
            <strong>outras {qtdCurtir} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
