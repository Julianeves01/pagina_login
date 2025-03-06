import styles from "../styles/Input.module.css";

export default function Input({ type, placeholder, icon }) {
return (
    <div className={styles.inputGroup}>
    <input type={type} placeholder={placeholder} required />
    <span className={styles.icon}>{icon}</span>
    </div>
);
}
