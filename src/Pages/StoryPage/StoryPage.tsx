import styles from './StoryPage.module.scss';
import {api, endpoints} from '../../Lib/Api';
import {useLocation} from 'react-router-dom';
import {useEffect, useState} from 'react';
import StoryPost from '../../Components/StoryPost/StoryPost';
import CommentSection from '../../Components/CommentSection/CommentSection';
const StoryPage = () =>{
    const [data, setData] = useState<any | null>()
    const location = useLocation();
    const postId = location.pathname.split('/')[2]
    console.log(postId);
    useEffect(()=>{
        const getData = async() =>{
            const config = {
                params:[postId]
            }
            const result = await api.call(endpoints.getPost,config);
            console.log(result);
            if(result.success){
                setData(result.data);
            }

        }
        getData();
    },[postId])
    console.log(data);
    return<>
    <div className={styles.container}>
        {data&&(<>
        <StoryPost data={data} />
        <CommentSection id={postId} />
        </>)}
    </div>
    </>
}
export default StoryPage;