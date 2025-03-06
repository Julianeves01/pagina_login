import Layout from "./layout";
import Button from "../components/Button";
import Input from "../components/Input";
import Image from "../components/Image";
import styles from "../styles/Home.module.css";

export default function Home() {
return (
    <Layout>
    <div className={styles.container}>
        {/* Lado Esquerdo - Imagem */}
        <div className={styles.imageContainer}>
        <Image />
        </div>

        {/* Lado Direito - Formulário */}
        <div className={styles.formContainer}>
        <h2>USER LOGIN</h2>
        <form className={styles.form}>
            <Input type="text" placeholder="USERNAME" icon="👤" />
            <Input type="password" placeholder="PASSWORD" icon="🔒" />
            
            <div className={styles.options}>
            <label>
                <input type="checkbox" /> lembre-se de mim
            </label>
            <a href="#">Esqueci minha senha</a>
            </div>

            <Button text="LOGIN" />
            
            {/* Novo Botão de Registre-se */}
            <button className={styles.registerButton}>Registre-se</button>
        </form>
        </div>
      </div> {/* Fechando a div container */}
    </Layout>
);
}