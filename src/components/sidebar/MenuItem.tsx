import { Fragment } from "react";
import { FaChartPie, FaUserMd } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function MenuItem() {
  const menu_itens = [
    {
      title: "Dashboard",
      path: "/",
      icon: <FaChartPie width="40" height="40" />,
    },
    {
      title: "Doctors",
      path: "/doctors",
      icon: <FaUserMd width="40" height="40" />,
    },
  ];

  return (
    <Fragment>
      {menu_itens.map((item, index) => (
        <NavLink key={index} exact to={item.path} activeClassName="active">
          {item.icon}
          <span>{item.title}</span>
        </NavLink>
      ))}
    </Fragment>
  );
}
