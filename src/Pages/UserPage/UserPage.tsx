import styles from './UserPage.module.scss';



import Header from '../../Components/Header/Header';
import {useState, useEffect} from 'react';
import {api, endpoints} from '../../Lib/Api'
import {useLocation} from 'react-router-dom';
import UserInfo from '../../Components/UserInfo/UserInfo';
import UserPosts from '../../Components/UserPosts/UserPosts';
import Footer from '../../Components/Footer/Footer';

const UserPage = () =>{

    const location = useLocation();

    const userId = location.pathname.split('/')[2];
    
    const [data, setData] = useState<any>([]);
    useEffect(()=>{
        const getData = async() =>{
            const config ={
                params:[userId]
            }
            const result = await api.call(endpoints.getUser,config);
            console.log(result);
            if(result.success){
                setData([result.data]);
            }
          
            

        }
        getData();
    },[userId])
    return<>
    <div className={styles.container}>
        <Header />
        {data &&data.map((elem:any)=>{
            return<>
            <UserInfo data={elem} />
            <UserPosts data={elem} />
            </>
        })}
        <Footer />


    </div>
    </>
}
export default UserPage;