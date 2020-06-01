import React from 'react';
import styles from './styles.module.scss';

function Header() {

  return (

	  <section className={styles.seccion} >
    <header className={styles.container}>
          <p className={styles.text1}>OTOÑO / INVIERNO </p>
			<h3 className={styles.titre3}>
			<span>T</span> <span>E</span> <span>M</span> <span>P</span> <span>O</span>
			<span>R</span> <span>A</span> <span>D</span> <span>A</span><span></span>
            <span> 2</span><span>0</span><span>2</span><span>0</span><span>!</span>
         </h3>
       </header>
     </section>

  );
}

export default Header;