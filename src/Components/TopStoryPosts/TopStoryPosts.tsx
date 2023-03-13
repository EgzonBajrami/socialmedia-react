import styles from './TopStoryPosts.module.scss';
import {api,endpoints} from '../../Lib/Api';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const TopStoryPosts = () =>{
    const navigate = useNavigate();
   
    const [firstPosts, setFirstPosts] = useState<any[]>([])
    const [secondPosts, setSecondPosts] = useState<any[]>([]);
    useEffect(()=>{
        const getData = async() =>{
            const result = await api.call(endpoints.getTopStories);
            if(result.success){
             
                let first = [];
                for(let i=0; i<result.data.length-4; i++){
                    first.push(result.data[i]);
                    
                }
           
                setFirstPosts(first);
            }
            let second = [];
            for(let i=result.data.length-1; i>2; i--){
                second.push(result.data[i]);

            }
        
            setSecondPosts(second);

        }
        getData();
    },[])
    console.log(firstPosts);
    console.log(secondPosts);
  
    return<>
    <div className={styles.container}>
        <div className={styles.title}>
            <p>Top Stories</p>
            <div className={styles.content}>
                <div className={styles.firstContent}>
                    {firstPosts &&firstPosts.map((elem:any)=>{
                        return(
                            <div className={styles.postContent} key={elem._id}
                            onClick={()=>navigate(`/stories/${elem._id}`)}>
                                <div className={styles.postImage}>
                                    <img src={process.env.REACT_APP_API_URL + elem.images} alt="elem"/>
                                    </div>
                                    <div className={styles.postDetails}>

                                    <div className={styles.postTitle}>
                                        <p>{elem.title}</p>
                                        <p className={styles.postAuthor}>{elem.author}</p>
                                        </div>
                                        <div className={styles.postText}>
                                            <p>{elem.storyText.substring(0,200)}...</p>
                                            </div>
                                        </div>
                                </div>
                        )
                    })}

                </div>
                <div className={styles.secondContent}>
                    {secondPosts &&secondPosts.map((elem:any)=>{
                        return(
                            <div className={styles.secondPosts} key={elem._id}
                            onClick={()=>navigate(`/stories/${elem._id}`)}>
                                <div className={styles.secondPostImage}>
                                    <img src={process.env.REACT_APP_API_URL +elem.images} alt='Test' />
                                    </div>
                                    <div className={styles.secondPostTitle}>
                                        <p>{elem.title}</p>
                                        </div>
                                        <div className={styles.secondPostAuthor}>
                                            <p>{elem.author}</p>
                                            </div>
                                </div>
                        )
                    })}

                </div>
            </div>

        </div>

    </div>
    </>
}
export default TopStoryPosts;