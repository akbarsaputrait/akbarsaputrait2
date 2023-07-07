"use client";
import "@styles/header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header: React.FC = () => {
  const path = usePathname();
  const routes = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/blog",
      title: "Blog",
    },
  ];

  const [pathname, setPathName] = useState("");

  useEffect(() => {
    setPathName(path);
  }, [path]);

  return (
    <div className="header">
      <div className="logo"></div>

      <nav className="nav">
        {routes.map((route, index) => {
          return route.path !== "" ? (
            <Link
              href={route.path}
              className={route.path == pathname ? "active" : ""}
              key={index}
            >
              {route.title}
            </Link>
          ) : (
            <a key={route.title} className="link-disabled">
              {route.title}
            </a>
          );
        })}
      </nav>
    </div>
  );
};

export default Header;
