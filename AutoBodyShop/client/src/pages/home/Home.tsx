import Header from "../header/Header";
import style from "./homeStyles.module.scss";
const Home = () => {
  return (
    <>
      <div className={style.background}>
        <Header />
      </div>
    </>
  );
};

export default Home;
