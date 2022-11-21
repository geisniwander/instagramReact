import { useState } from "react";

export default function Usuario(props) {
  const [nome, setNome] = useState(props.nomePerfil);
  const [imagem, setImagem] = useState(props.imagemPerfil);

  function verificaUrl() {
    const str = prompt("Insira uma nova url de imagem");
    if (str === "") {
      alert("URL Vazia!");
      return;
    } else if (!str) {
      return;
    }

    try {
      new URL(str);
      setImagem(str);
    } catch (err) {
      alert("URL inválida!");
    }
  }

  function verificaNome() {
    const str = prompt("Digite um nome de usuário");
    if (str === "") {
      alert("Nome Vazio!");
      return;
    } else if (str[0] === " ") {
      alert("Nome Inválido!");
      return;
    } else if (!str) {
      return;
    } else {
      setNome(str);
    }
  }

  return (
    <div className="usuario" data-test="user">
      <img
        alt="imagem-perfil"
        src={imagem}
        onClick={verificaUrl}
        data-test="profile-image"
      />
      <div className="texto">
        <strong>{props.usuarioPerfil}</strong>
        <span>
          <span data-test="name">{nome}</span>
          <ion-icon
            name="pencil"
            onClick={verificaNome}
            data-test="edit-name"
          ></ion-icon>
        </span>
      </div>
    </div>
  );
}
