import styles from './UserPosts.module.scss'
import {useEffect, useState} from 'react';
import {api, endpoints} from '../../Lib/Api';
import {useNavigate} from 'react-router-dom';
const UserPosts = ({data}:any) =>{
    const navigate= useNavigate();

    const [userPosts, setUserPosts] = useState<any[]>([]);
    useEffect(()=>{
        const getData = async() =>{
            const config = {
                params:[data._id]
            }
            const result = await api.call(endpoints.getUserPosts, config);
            console.log(result);
            if(result.success){
                setUserPosts(result.data);
            }
        }
        getData();

    },[data._id])
    return<>
    <div className={styles.container}>
        <div className={styles.content}>
        <div className={styles.title}>
                <p>{data.firstName} {data.lastName} posts:</p>
              
            </div>

  

   
    {userPosts &&userPosts.map((elem:any)=>{
    
            return(
                <div className={styles.posts} key={elem._id}
                onClick={()=>navigate(`/stories/${elem._id}`)}>
                    <div className={styles.postsImage}>
                        <img src={process.env.REACT_APP_API_URL +elem.images} alt="Post" />
                        </div>
                        <div className={styles.postTitle}>
                            <p>{elem.title}</p>
                            <p className={styles.author}>{elem.author}</p>
                            <p className={styles.date}>{elem.createdAt.split('T')[0]}</p>
                            </div>
                            <div className={styles.postContent}>
                            <p>{elem.storyText.substring(0,200)}...</p>
                                </div>
                    </div>
            )
        
    })}

</div>

    
     </div>
  
    </>
}
export default UserPosts;