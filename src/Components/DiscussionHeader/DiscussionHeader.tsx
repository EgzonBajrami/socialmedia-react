import styles from './DiscussionHeader.module.scss'
import {useNavigate} from 'react-router-dom';
const DiscussionHeader = () =>{
    const navigate = useNavigate();
    return<>
    <div className={styles.container}>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/Politics`)}>Politics</p>
        </div>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/Justice`)}>Justice</p>
        </div>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/National_Security`)}>National Security</p>
        </div>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/World`)}>World</p>
        </div>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/Technology`)}>Technology</p>
        </div>
        <div className={styles.title}>
            <p
              onClick={()=>navigate(`/discussions/Environment`)}>Environment</p>
        </div>






    </div>
    </>
}
export default DiscussionHeader;