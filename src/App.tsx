import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section className={styles.head__section}></section>
        <section className={styles.about__section}></section>
        <section className={styles.company_value__section}></section>
        <section className={styles.career_growth__section}></section>
        <section className={styles.live_slider__section}></section>
        <section className={styles.practice__section}></section>
        <section className={styles.answers__section}></section>
      </main>
      <Footer />
    </>
  );
}

export default App;
