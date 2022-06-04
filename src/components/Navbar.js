import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data/constant";
import useStyles from "./styles";

const Navbar = () => {
  const classes = useStyles();
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  // console.log(links);
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  return (
    <nav className={classes.nav}>
      <div className={classes.navCenter}>
        <div className={classes.navHeader}>
          {/* <img src={logo} className="logo" alt="logo" /> */}

          <h3 className={classes.navHeading}>RoBlogs</h3>

          <button className={classes.navToggle} onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className={classes.linksContainer} ref={linksContainerRef}>
          <ul className={classes.links} ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
