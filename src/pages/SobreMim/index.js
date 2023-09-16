import styles from "./SobreMim.module.css";

import PostModelo from "components/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto (2).png";

export default function Sobremim() {
  return (
    <PostModelo fotoCapa={fotoCapa}>
      <h3 className={styles.subtitulo}>Olá, meu nome é LuisTakeo!</h3>
      <img src={fotoSobreMim} alt="" className={styles.fotoSobreMim} />
      <p>
        Já trabalhei na área de atendimento por anos, tanto por voz quanto via
        chat/e-mail, e fui considerado como um dos melhores atendentes do meu
        setor. Há 1 ano e meio fiz uma mudança a qual decidi entrar na área de
        programação. Tenho muito interesse e gosto pela área de desenvolvimento
        web. As tecnologias que tenho conhecimento: Angular, React, Typescript,
        HTML - CSS - Javascript, Java, POO/OOP, C, MVC, PHP, Python, MySQL.
      </p>
    </PostModelo>
  );
}
