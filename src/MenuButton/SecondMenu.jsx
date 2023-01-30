import css from "./MenuButton.module.css";

const SecondMenu = () => {

  return (
    <>
      <ul>
        <li className={css.SecondMenuItem}> 
            <a className={css.SecondMenuButton} href="/"> Wooman </a>
            <a className={css.SecondMenuButton} href="/"> Man </a>
          </li>
      </ul>
    </>
  );
};
export default SecondMenu;
