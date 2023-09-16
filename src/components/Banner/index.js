import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto (2).png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apreseentacao}>
        <h1 className={styles.titulo}>Olá, mundo!</h1>
        <p className={styles.paragrafo}>
          Boas vindas ao meu espaço pessoal! Eu sou Luis Takeo, estudante de
          Desenvolvimento Front-End. Estou adquirindo vários conhecimentos por
          meio deste estudo! =D
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />
        <img className={styles.minhaFoto} src={minhaFoto} alt="Minha foto" />
      </div>
    </div>
  );
}
