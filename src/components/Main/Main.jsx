import DataRender from "../DataRender/DataRender";
import { dataObject } from "../../data/dataObject";
import style from "./main.module.scss";

function Main() {
  return (
    <main>
      <div className={style.container}>
        <DataRender data={dataObject} />
      </div>
    </main>
  );
}

export default Main;
