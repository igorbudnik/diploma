import styles from "./about.module.css";

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Будник Игорь",
      role: "FE разработчик",
      description: "Ответственный за разработку визуальной части сайта",
      photo: "photo1.jpg",
    },
    {
      id: 2,
      name: "Вялков Александр",
      role: "Аналитик",
      description: "Ответственный за исследование",
      photo: "photo2.jpg",
    },
    {
      id: 3,
      name: "Долгих Владимир",
      role: "BE разработчик",
      description:
        "Ответственный за разработку серверной части сайта и парсинг информации",
      photo: "photo3.jpg",
    },
    {
      id: 4,
      name: "Турусов Всеволод",
      role: "Руководитель проекта",
      description: "Ответственный за организационную работу проекта",
      photo: "photo4.jpg",
    },
  ];

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.textBlockLeft}>
          <h2 className={styles.title}>
            Географическое расположение заводов России
          </h2>
          <p className={styles.text}>
            Данное исследование посвящено анализу пространственного
            распределения промышленных предприятий на территории Российской
            Федерации. В работе рассматриваются закономерности размещения
            заводов, их связь с инфраструктурой, сырьевыми базами и трудовыми
            ресурсами.
          </p>
          <p className={styles.text}>
            Особое внимание уделяется выявлению региональных кластеров
            промышленного производства и оценке их эффективности в современных
            экономических условиях.
          </p>
        </div>

        <div className={styles.imageBlockTop}>
          <div className={styles.imagePlaceholder}>
            Изображение промышленного кластера
          </div>
        </div>

        <div className={styles.textBlockRight}>
          <h2 className={styles.title}>Методология исследования</h2>
          <p className={styles.text}>
            В работе применяются современные геоинформационные технологии,
            методы пространственного анализа и статистической обработки данных.
            Используются открытые данные Росстата, кадастровые карты и
            специализированные промышленные реестры.
          </p>
          <p className={styles.text}>
            Исследование включает создание интерактивной карты с возможностью
            визуализации различных параметров предприятий: отраслевой
            принадлежности, объема производства, численности персонала.
          </p>
        </div>

        <div className={styles.imageBlockBottom}>
          <div className={styles.imagePlaceholder}>
            Изображение карты заводов
          </div>
        </div>
      </div>

      {/* Блок с участниками проекта */}
      <div className={styles.teamSection}>
        <h2 className={styles.sectionTitle}>Наша команда</h2>
        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamMember}>
              <div className={styles.memberPhoto}>
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className={styles.photo}
                  />
                ) : (
                  <div className={styles.photoPlaceholder}>
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberDescription}>{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
