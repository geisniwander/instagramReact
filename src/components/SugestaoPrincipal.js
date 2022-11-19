import { useState } from "react";

export default function SugestaoPrincipal(props) {
  const [nome,setNome]=useState(props.nomePerfil)
  const [imagem,setImagem]=useState(props.imagemPerfil)

  function verificaUrl(str){
        try {
          new URL(str);
          setImagem(str);
        } catch (err) {
          alert("URL inválida!")
        }
  }

  function verificaNome(str){
    if(!str) alert("Nome inválido!");
    else setNome(str);
  }

    return (
    <div class="usuario">
      <img src={imagem} onClick={()=>verificaUrl(prompt("Insira uma nova url de imagem"))} />
      <div class="texto">
        <strong>{props.usuarioPerfil}</strong>
        <span>
          {nome}
          <ion-icon name="pencil" onClick={()=>verificaNome(prompt("Digite um nome de usuário"))}></ion-icon>
        </span>
      </div>
    </div>
  );
}
