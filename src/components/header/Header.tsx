import styles from "./header.module.css";

const Header = ({ scroll }) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}></div>
      <nav className={styles.header__nav}>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>Профориентация</li>
          <li className={styles.header__item}>Выбрать вакансию</li>
          <li className={styles.header__item}>Карьера в ГЭНДАЛЬФ</li>
          <li className={styles.header__item}>Стажерство</li>
          <li className={styles.header__item}>Отзывы</li>
        </ul>
      </nav>
      <button className={styles.header__btn} onClick={scroll}>
        Запись на собеседование
      </button>
    </header>
  );
};

export default Header;
