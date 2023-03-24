import styles from './PoliticsPage.module.scss'
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {api, endpoints} from '../../Lib/Api';
import Header from '../../Components/Header/Header';
import PostsContainer from '../../Components/PostsContainer/PostsContainer';
import Footer from '../../Components/Footer/Footer'

const PoliticsPage = () =>{
    const location = useLocation();
    const [data, setData] = useState<any[]>([]);

    let storyType = location.pathname.split('/')[2];
    console.log(storyType);
    useEffect(()=>{
        const config = {
            params:[storyType]
        }
        const getData = async() =>{
            const result = await api.call(endpoints.getDiscussions, config);
            console.log(result);
            if(result.success){
                setData(result.data);
            }
        }
        getData();

    },[storyType])
    return<>
    <div className={styles.container}>
        <Header />
       <div></div>
       {data &&(
        <div className={styles.content}>
          
                <PostsContainer data={data} />
           

        </div>
         )}
     <Footer />
    </div>
    </>
}
export default PoliticsPage;