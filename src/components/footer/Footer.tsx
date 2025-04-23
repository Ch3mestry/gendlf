import { useRef, useState } from "react";
import styles from "./footer.module.css";

const Footer: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    position: '',
    questions: '',
  });
  const [errors, setErrors] = useState<string[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    const fileName = file ? file.name : "Нет файла";
    alert("Вы прикрепили файл: " + fileName);
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors: string[] = [];
    if (!formData.name) newErrors.push("Имя обязательно для заполнения.");
    if (!formData.phone) newErrors.push("Телефон обязателен для заполнения.");
    if (!formData.email) newErrors.push("Email обязателен для заполнения.");
    if (!formData.position) newErrors.push("Выберите желаемую должность.");
    if (!formData.questions) newErrors.push("Пожалуйста, задайте ваши вопросы.");
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      alert("Форма успешно отправлена!");
      // Здесь можно добавить логику для отправки данных формы
    }
  };

  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit} className={styles.footer__form} id="form">
        <h2 className={styles.footer__title}>Записаться на собеседование</h2>
        <input
          type="text"
          name="name"
          placeholder="Как к вам обращаться?"
          className={styles.footer__input}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Телефон"
          className={styles.footer__input}
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.footer__input}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="position"
          placeholder="Желаемая должность"
          className={styles.footer__input}
          value={formData.position}
          onChange={handleChange}
        />
        <div className={styles.footer__radios}>
          <span className={styles.footer__radios_choose}>
            Выберите категорию занятости
          </span>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="employment" id="office" value="office" onChange={handleChange} />
            <label htmlFor="office">Работа в офисе</label>
          </div>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="employment" id="intern" value="intern" onChange={handleChange} />
            <label htmlFor="intern">Стажировка</label>
          </div>
          <div className={styles.footer__radio_block}>
            <input type="radio" name="employment" id="distant" value="distant" onChange={handleChange} />
            <label htmlFor="distant">Удаленная работа</label>
          </div>
        </div>
        <textarea
          name="questions"
          placeholder="Ваши вопросы"
          className={styles.footer__textarea}
          value={formData.questions}
          onChange={handleChange}
        />
        {errors.length > 0 && (
          <div className={styles.footer__errors}>
            {errors.map((error, index) => (
              <p key={index} className={styles.footer__error}>{error}</p>
            ))}
          </div>
        )}
        <div className={styles.footer__btns}>
          <div className={styles.footer__block_resume}>
            <button
              type="button"
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
              style={{ display: 'none' }} // Скрываем input
            />
          </div>
          <button type="submit" className={styles.footer__btn_submit}>Записаться</button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
