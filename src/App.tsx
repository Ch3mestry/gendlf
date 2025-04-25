import { useState } from "react";
import styles from "./App.module.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AnswerItem from "./components/header/answerItem/AnswerItem";

interface ICompanyValueItem {
  id: number;
  img: string;
  title: string;
  text: string;
}

interface IRibbonItem {
  id: number;
  img: string;
  description: string;
  idNews: number;
}

interface IAnswerItem {
  id: number;
  title: string;
  description: string;
}

function App() {
  const companyValueItems: ICompanyValueItem[] = [
    {
      id: 1,
      img: "src/assets/images/value1.png",
      title: "Быть командой",
      text: "Готовность вносить вклад в общие цели команды и достигать их.",
    },
    {
      id: 2,
      img: "src/assets/images/value2.png",
      title: "Побеждать и не сдаваться ",
      text: "Быть ориентированным на результат, настойчивым и не сдаваться перед трудностями.",
    },
    {
      id: 3,
      img: "src/assets/images/value3.png",
      title: "Заботиться о клиентах",
      text: "Выполнять обещания и интересоваться потребностями своих клиентов",
    },
    {
      id: 4,
      img: "src/assets/images/value4.png",
      title: "Быть увлеченным и ответственным",
      text: "Вкладывать душу в то, что делаешь и получать от работы удовольствие.",
    },
    {
      id: 5,
      img: "src/assets/images/value5.png",
      title: "Развиваться",
      text: "Постоянно расти личностно и профессионально для достижения поставленных целей.",
    },
  ];
  const ribbonItems: IRibbonItem[] = [
    {
      id: 1,
      img: "src/assets/images/ribbon1.png",
      description:
        "Экономим на бумаге и угадываем фильмы: дайджест видео марта 2022 года",
      idNews: 1,
    },
    {
      id: 2,
      img: "src/assets/images/ribbon2.png",
      description: "Изменения 2022 года",
      idNews: 2,
    },
    {
      id: 3,
      img: "src/assets/images/ribbon3.png",
      description: "Почему стоит работать программистом в 2022 году",
      idNews: 3,
    },
    {
      id: 4,
      img: "src/assets/images/ribbon4.png",
      description:
        "Автоматизированный УСН и путевые листы: дайджест новостей за март 2022. Автоматизированный УСН и путевые листы",
      idNews: 4,
    },
    {
      id: 5,
      img: "src/assets/images/ribbon2.png",
      description: "Тест Слайд",
      idNews: 5,
    },
  ];
  const answers: IAnswerItem[] = [
    {
      id: 1,
      title: "На что нужно обратить внимание на собеседовании?",
      description: `
        Кроме умения представлять себя, грамотно разговаривать и
        опрятного внешнего вида, стоит обратить внимание еще на пару
        моментов. Они не очевидны, но очень эффективны.
        <ul>
          <li><strong>Сохраняйте спокойствие.</strong> Конечно, собеседование – это
          стрессовая ситуация, которая мешает конструктивно мыслить.
          Если волнение берет верх – выпейте немного воды, прижмите
          стопы к полу, а главное, помните: ничего ужасного
          произойти не может.</li>
          <li><strong>Внимание к самопрезентации. </strong>Если собеседование – пьеса, вы
          – ее главный герой. Подготовьте рассказ о себе заранее,
          опираясь на важные навыки, и опишите, почему это важно для
          данной работы. Все это придаст вам уверенности в себе.</li>
          <li><strong>Каверзные вопросы – это норма.</strong> Если вам задали какой-либо
          вопрос, который кажется вам сложным или задевает личные
          качества, знайте – правильных ответов не существует.
          Каверзные вопросы призваны показать вашу
          стрессоустойчивость и умение ориентироваться в ситуации.
          Здесь поможет адекватная самокритика и знания в своей
          профессии.</li>
        </ul>
      `,
    },
    {
      id: 2,
      title: "Как правильно составить резюме?",
      description:
        "testAnswerId2 верзные вопросы – это норма. Если вам задали какой-либо вопрос, который кажется вам сложным или задевает личныекачества, знайте – правильных ответов не существует.Каверзные вопросы",
    },
    {
      id: 3,
      title: "Возможно ли устроиться без опыта?",
      description: "testAnswerId3",
    },
    {
      id: 4,
      title: "Ошибки на собеседовании. Чего нужно избегать?",
      description: "testAnswerId4",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = window.innerWidth <= 375 ? 1 : 4;

  const nextSlide = () => {
    if (currentIndex < ribbonItems.length - itemsPerView) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header scroll={scrollToForm} />
      <main className={styles.main}>
        <section className={styles.head__section}>
          <h1 className={styles.head__title}>Добро пожаловать в ГЭНДАЛЬФ!</h1>
          <p className={styles.head__text}>
            Мы готовы поделиться секретом, почему любим компанию, в которой
            работаем. Если тебе будут близки наши ценности и идеи, то смело
            записывайся на собеседование!
          </p>
          <div className={styles.head__btns}>
            <button className={styles.head__btn_why}>Почему мы</button>
            <button className={styles.head__btn_reg} onClick={scrollToForm}>
              Записаться на собеседование
            </button>
          </div>
        </section>
        <section className={styles.about__section}>
          <div className={styles.about__text_content}>
            <h2 className={styles.about__title}>О том, чем мы занимаемся</h2>
            <div className={styles.about__text_block}>
              <p className={styles.about__text}>
                ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных
                технологий, занимающий 4 место среди 7000 партнеров фирмы «1С».
                У нас есть представительства в 15 городах России, а нашими
                услугами пользуются 23 000 организаций-клиентов, в числе которых
                «Базэл Аэро», «Ростсельмаш», UTG. Аэропорт Кольцово и многие
                другие.
              </p>
              <p className={styles.about__text}>
                Мы тщательно подходим к выбору сотрудников, которые становятся
                частью команды профессионалов.
              </p>
              <p className={styles.about__text}>
                У нас работают специалисты разных областей: программисты,
                маркетологи, менеджеры, копирайтеры, методисты и другие, чей
                карьерный рост не ограничен привычными рамками.
              </p>
            </div>
            <div className={styles.about__btns}>
              <button className={styles.about__btn_more}>Узнать больше</button>
              <button className={styles.about__btn_reg}>
                Записаться на собеседование
              </button>
            </div>
          </div>
          <div className={styles.about__images}>
            <img
              src="src/assets/svg/first-hexagon.svg"
              className={styles.about__hexagon_first}
            />
            <img
              src="src/assets/svg/second-hexagon.svg"
              className={styles.about__hexagon_second}
            />
            <img
              src="src/assets/svg/third-hexagon.svg"
              className={styles.about__hexagon_third}
            />
            <img
              src="src/assets/images/about.png"
              alt=""
              className={styles.about__image}
            />
          </div>
        </section>
        <section className={styles.company_value__section}>
          <h2 className={styles.company_value__title}>
            Наши ценности скажут о нас больше:
          </h2>
          <div className={styles.company_value__slider}>
            {companyValueItems.map((item) => {
              return (
                <div className={styles.company_value__item} key={item.id}>
                  <img
                    src={item.img}
                    className={styles.company_value__item_img}
                  />
                  <h5 className={styles.company_value__item_title}>
                    {item.title}
                  </h5>
                  <p className={styles.company_value__item_text}>{item.text}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className={styles.career_growth__section}>
          <h2 className={styles.career_growth__title}>
            Инфраструктура для твоего развития и роста
          </h2>
          <div className={styles.career_growth__content}>
            <div className={styles.career_growth__text_block}>
              <p className={styles.career_growth__text}>
                Мы создаем платформу для профессионального развития каждого
                сотрудника. Главная цель – дать возможность учиться, работать и
                получать удовольствие от каждой успешной задачи.
              </p>
              <p className={styles.career_growth__text}>
                О возможностях личностного роста в ГЭНДАЛЬФ расскажет
                руководитель Департамента персонала и карьеры Татьяна Арсенович.
              </p>
            </div>
            <video src="" className={styles.career_growth__video}>
              <source />
            </video>
            <img
              src="src/assets/svg/play-video.svg"
              className={styles.career_growth__video_tool}
            />
          </div>
        </section>
        <section className={styles.ribbon__section}>
          <h2 className={styles.ribbon__title}>Живая лента</h2>
          <div className={styles.ribbon__slider}>
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className={styles.ribbon_btn}
            >
              <img src="src/assets/svg/left-row-slider.svg" alt="" />
            </button>
            <div className={styles.ribbon__inner}>
              {ribbonItems
                .slice(currentIndex, currentIndex + itemsPerView)
                .map((item) => (
                  <div className={styles.ribbon__item} key={item.id}>
                    <img
                      src={item.img}
                      alt=""
                      className={styles.ribbon__item_img}
                    />
                    <p className={styles.ribbon__item_description}>
                      {item.description}
                    </p>
                    <button className={styles.ribbon__item_btn}>
                      Перейти к статье
                    </button>
                  </div>
                ))}
            </div>
            <button
              onClick={nextSlide}
              disabled={currentIndex >= ribbonItems.length - itemsPerView}
              className={styles.ribbon__btn}
            >
              <img src="src/assets/svg/right-row-slider.svg" alt="" />
            </button>
          </div>
        </section>
        <section className={styles.practice__section}>
          <h2 className={styles.practice__title}>
            Ты студент и хочешь устроиться на практику?
          </h2>
          <button className={styles.practice__btn} onClick={scrollToForm}>
            Оставить заявку
          </button>
        </section>
        <section className={styles.answers__section}>
          <div className={styles.answers__content}>
            <h3 className={styles.answers__title}>Ответы на вопросы</h3>
            <div className={styles.answers__list}>
              {answers.map((answer) => (
                <AnswerItem
                  key={answer.id}
                  title={answer.title}
                  description={answer.description}
                />
              ))}
            </div>
          </div>
          <img
            className={styles.answers__image}
            src="src/assets/images/answers.png"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
