import styles from './DiscussionHeader.module.scss'
const DiscussionHeader = () =>{
    return<>
    <div className={styles.container}>
        <div className={styles.title}>
            <p>Politics</p>
        </div>
        <div className={styles.title}>
            <p>Justice</p>
        </div>
        <div className={styles.title}>
            <p>National Security</p>
        </div>
        <div className={styles.title}>
            <p>World</p>
        </div>
        <div className={styles.title}>
            <p>Technology</p>
        </div>
        <div className={styles.title}>
            <p>Environment</p>
        </div>






    </div>
    </>
}
export default DiscussionHeader;