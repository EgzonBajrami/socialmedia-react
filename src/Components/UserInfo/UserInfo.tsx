import styles from './UserInfo.module.scss'
import {useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
import {Button} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import ChangeUserImage from '../ChangeUserImage/ChangeUserImage';

const UserInfo = ({data}:any) =>{
    console.log(data._id);
    const auth = useSelector((state:any)=>state.auth.data);
    let decoded:any;
    const location = useLocation();
    const userId = location.pathname.split('/')[2];
    console.log(userId);
    if(auth){
        let current:any = jwt_decode(auth.token);
        decoded = current._id;
        console.log(decoded);

    }
    if(userId===decoded){
        console.log("YES IT IS YOU")
    }
    return<>
    <div className={styles.container}>
        <div className={styles.content}>

        <div className={styles.imageContainer}>
            <img src={process.env.REACT_APP_API_URL + data.avatar} alt="avatar" />
         
        </div>
        <div className={styles.userInfo}>
        
            <p>{data.firstName} {data.lastName}</p>
            <p>Member since:{data.createdAt.split('T')[0]}</p>
      
        {(decoded=== userId.toString()) &&(
     
        <div className={styles.btnsHolder}>
          
          <ChangeUserImage changeImg={data._id} />
            <Button>Change password</Button>
        </div>
        )}
        </div>
      
        </div>

    </div>
    </>
}
export default UserInfo;