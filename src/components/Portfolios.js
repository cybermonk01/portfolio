import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";

const Portfolios = () => {
  const router = useRouter();

  return (
    <div className={styles["portfolio-marquee-container"]}>
      <div className={styles["container"]}>
        <div className={styles["section-header"]}>
          <img
            src="img/portfolio-logo.png"
            alt=""
            className="portfolio-image"
          />
        </div>
      </div>

      <div className="navbar-expand-lg navbar-extralight align-center h4">
        <div className="container-fluid font-lg">
          <Link href="/">
            <a className="navbar-brand"></a>
          </Link>

          <div className="navbar-expand-lg navbar-extralight h4">
            <div className="container-fluid font-lg">
              <Link href="/">
                <a className="navbar-brand"></a>
              </Link>

              <div className="nvbar navbar-nav">
                <Link href="/design">
                  <a
                    className={`${styles["nav-item"]} ${styles["nav-link"]} ${
                      styles["border"]
                    } ${styles["border-12"]} ${styles["border-secondary"]} ${
                      styles["rounded-pill"]
                    } ${styles["p-3"]} ${
                      router.pathname === "/design" ? styles["active"] : ""
                    }`}
                  >
                    Logo Designs
                  </a>
                </Link>
                <Link href="/portfolios">
                  <a
                    className={`${styles["nav-item"]} ${styles["nav-link"]} ${
                      router.pathname === "/portfolios" ? styles["active"] : ""
                    }`}
                  >
                    Websites
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["row"]} id="porfolio-slider">
        <div className={styles["service-item"]}>
          <img src="/img/2ab.png" alt="Icon" />
          <div className={styles["portfolio-visit-links"]}>
            <p>Toddler House</p>
            <Link href="https://www.toddlerhouselucknow.com/">
              <a target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </Link>
          </div>
        </div>
        <div className={styles["service-item"]}>
          <img
            src="/img/Hymax (2).png"
            alt="Icon"
            className={styles["img-large"]}
          />
          <div className={styles["portfolio-visit-links"]}>
            <p>Hymax Food & Beverages Pvt. Ltd.</p>
            <Link href="https://hymaxdev.in/">
              <a target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </Link>
          </div>
        </div>
        {/* Add more service items here */}
      </div>
    </div>
  );
};

export default Portfolios;
