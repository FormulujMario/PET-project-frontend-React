import { FOOTER_MENU_LIST } from "../../constants";
import { SOC_NET_ICONS } from "../../constants";
import "./MainLinks.css";

const MainLinks = () => {
  return (
    <section className="main-links-footer">
      <div className="list-menu-footer">
        {FOOTER_MENU_LIST.map((element) => {
          return (
            <div>
              <span>{element.name}</span>
              <ul>
                {element.list.map((subelement) => {
                  return <li>{subelement}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="soc-net-icons">
        {SOC_NET_ICONS.map((icon) => {
          return icon.svg;
        })}
      </div>
    </section>
  );
};

export default MainLinks;
