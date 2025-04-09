import { useRef } from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    const fileName = file ? file.name : "Нет файла";
    alert("Вы прикрепили файл: " + fileName);
  };
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <footer className={styles.footer}>
      <form action="" className={styles.footer__form}>
        <h2 className={styles.footer__title}>Записаться на собеседование</h2>
        <input
          type="text"
          placeholder="Как к вам обращаться?"
          className={styles.footer__input}
        />
        <input
          type="te"
          placeholder="Телефон"
          className={styles.footer__input}
        />
        <input
          type="email"
          placeholder="Email"
          className={styles.footer__input}
        />
        <input
          type="text"
          placeholder="Желаемая должность"
          className={styles.footer__input}
        />
        <div className={styles.footer__radios}>
          <span className={styles.footer__radios_choose}>
            Выберите категорию занятости
          </span>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="position" id="office" defaultChecked />
            <label htmlFor="office">Работа в офисе</label>
          </div>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="position" id="intern" />
            <label htmlFor="intern">Стажировка</label>
          </div>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="position" id="distant" />
            <label htmlFor="distant">Удаленная работа</label>
          </div>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Ваши вопросы"
          className={styles.footer__textarea}
        />
        <div className={styles.footer__btns}>
          <div className={styles.footer__block_resume}>
            <button
              className={styles.footer__btn_resume}
              onClick={triggerFileInput}
            >
              Прикрепить резюме
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              className={styles.footer__input_file}
            />
          </div>
          <button className={styles.footer__btn_submit}>Записаться</button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
