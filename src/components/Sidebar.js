import SugestaoPrincipal from "./SugestaoPrincipal";
import Sugestoes from "./Sugestoes";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <SugestaoPrincipal
        usuarioPerfil="catanacomics"
        imagemPerfil="assets/img/catanacomics.svg"
        nomePerfil="Catana"
      />

      <Sugestoes />

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
