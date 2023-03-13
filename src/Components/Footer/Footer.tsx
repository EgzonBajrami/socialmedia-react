import styles from './Footer.module.scss';
const Footer = () =>{
    return<>
    <div className={styles.container}>
        <div className={styles.content}>

        <div className={styles.title}>
            <h3>The</h3>
            <h3>Newspaper</h3>
        </div>
        <div className={styles.about}>
            <h3>About</h3>
            <h3>Sources</h3>
            <h3>Become a member</h3>
        </div>
        <div className={styles.abt}>
            <h3>Terms of use</h3>
            <h3>Privacy</h3>
       
        </div>
        
        </div>

    </div>
    </>
}
export default Footer;