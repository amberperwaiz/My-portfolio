import React from "react";
import styles from './HeroSection.module.css';
import { interfont } from "@/font"; 
import { FaFacebookF, FaXTwitter, FaInstagram, FaWhatsapp, FaTelegram } from "react-icons/fa6";
import Button from "../button/Button";

const HeroSection: React.FC = () => {
  return (
    <section className={`${styles.hero} ${interfont.className}`}>
      <h1>
        Hey! I'm{" "}
        <span>Amber</span>
        <br />
        <span>I</span>'m A Front End Web Developer
      </h1>
      <p>
        I can build user interface for Web sites and applications with{" "}
        <span>React js</span> and {" "}
        <span>Next.js</span>
        <br />
        I love the front end Developer
      </p>
      <Button text="Hire Me" />
      <div className={styles.socialIcons}>
        <FaFacebookF />
        <FaXTwitter />
        <FaInstagram />
        <FaWhatsapp />
        <FaTelegram />
      </div>
    </section>
  );
};

export default HeroSection;