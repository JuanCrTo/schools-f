import ButtonProfile from "@/components/ButtonProfile";
import Filter from "@/components/Filter";
import Schools from "@/components/Schools";
import styles from "@/styles/pages/Home.module.scss"; // Asegúrate de importar el archivo de estilos

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Filter />
      <div className={styles.contentContainer}>
        <div className={styles.buttonProfile}>
          <ButtonProfile />
        </div>
        <Schools />
      </div>
    </div>
  );
}
