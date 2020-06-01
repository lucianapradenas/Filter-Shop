import React from "react";
import styles from './styles.module.scss';
import twitter from '../images/twitter.svg';
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'

function Footer() {
    const today = new Date();
    const year = today.getFullYear();
    return (
      <footer>
        <div className={styles.container}>
          <div className={styles.column1}>
              <p className={styles.title4}>CONTACTO</p>
              <p className={styles.item}> Telefono: +54 011 123 123 </p>
              <p className={styles.item}> Correo: Loreminput@gmail.com</p>
          </div>  
          <div className={styles.column2}>
              <p className={styles.title4}>UBICACION</p>
              <p className={styles.item}> Direccion: Lorem Input 123</p>
              
          </div>
          <div className={styles.column3}>
              <p className={styles.title4}>REDES</p>
                <img src={twitter} alt="twitter" className={styles.logo} />
                <img src={facebook} alt="facebook" className={styles.logo} />
                <img src={instagram} alt="instagram" className={styles.logo} />
          </div>
          </div>
            <p className={styles.copyryght}>
              &#169; {year} EmmaShoes
              All Rights Reserved. 
              Designed & Developed by
            </p>
      </footer>

      );
    }
    
    export default Footer;