import styles from './Header.module.scss';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux';
import jwt_decode from 'jwt-decode';
const Header = () =>{
  const [show, setShow] = useState<boolean>(true);
  const auth = useSelector((state:any)=>state.auth.data);
  let decoded:any;
  if(auth){
  let current:any = jwt_decode(auth.token);
   decoded = current._id;

  }
 
  const navigate = useNavigate();
  return<>
  <div className={styles.container}>
    <div className={styles.heading}>
      <div className={styles.iconHolder}>
        <FontAwesomeIcon 
        onClick={()=>setShow(!show)}
        className={styles.icon} 
        size='lg' icon={show?(faBars):(faX)} />
      
        <p
        onClick={()=>navigate('/')}>The newspaper</p>

      </div>
    </div>
    {show ?(<>
      <div className={styles.noShow}>

</div>
    
    </>):(<>
   
    
    
   
    <div className={styles.content}>
      <p
      onClick={()=>navigate(`/discussions/Politics`)}>Politics</p>
      <p
      onClick={()=>navigate(`/discussions/Justice`)}>Justice</p>
      <p
      onClick={()=>navigate(`/discussions/National_Security`)}>National Security</p>
        <p
      onClick={()=>navigate(`/discussions/World`)}>World</p>
      <p
        onClick={()=>navigate(`/discussions/Technology`)}>Technology</p>
      <p
        onClick={()=>navigate(`/discussions/Environment`)}>Environment</p>
        {decoded!==null && (<p onClick={()=>navigate(`/user/${decoded}`)}>
          Profile

        </p>)}

    </div>
    </>)}
  
   

  </div>
  </>
}
export default Header;