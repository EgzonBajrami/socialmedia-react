import styles from './StoryTypes.module.scss'
import {api, endpoints} from '../../Lib/Api';
import {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const StoryTypes = ({storyForm}:any)=>{
    const navigate = useNavigate();
    const [firstPost, setFirstPost] = useState<any[]>([]);
    const [secondPosts, setSecondPosts] = useState<any[]>([]);
    let stitle = storyForm;
    if(stitle ==='National_Security'){
        stitle = 'National Security'
    }
    useEffect(()=>{
        const getData = async() =>{
            const config = {
                params:[storyForm]
            }
            const result = await api.call(endpoints.getStories,config);
            console.log(result);
            if(result.success){
                setFirstPost([result.data[0]]);
                let second = [];
                for(let i=result.data.length-1; i>0; i--){
                    second.push(result.data[i]);

                }
                setSecondPosts(second);
                
            }
        
        }
        getData();
    },[storyForm])
    console.log(firstPost);
    console.log(secondPosts);
    return<>
    <div className={styles.container}>
      <div className={styles.title}>
        <p>{stitle}</p>
      </div>
      <div className={styles.content}>

 
      {firstPost &&firstPost.map((elem:any)=>{
        return(
        <div className={styles.firstPost}
        onClick={()=>navigate(`/stories/${elem._id}`)}>
            <div className={styles.firstPostImg}>
                <img src={process.env.REACT_APP_API_URL + elem.images} alt="story" />

                </div>
                <div className={styles.postTitle}>
                                        <p>{elem.title}</p>
                                        <p className={styles.postAuthor}>{elem.author}</p>
                                        </div>
                                     
                                       
            </div>
      )})}
      <div className={styles.secondPostsWrapper}>

     
      {secondPosts &&secondPosts.map((elem:any)=>{
        return(
            <div className={styles.secondPosts}
            onClick={()=>navigate(`/stories/${elem._id}`)}>
                <div className={styles.secondPostsImage}>
                    <img src={process.env.REACT_APP_API_URL +elem.images} alt="hej" />
                    </div>
                    <div className={styles.secondPostsDetails}>
                                        <p>{elem.title}</p>
                                        <p className={styles.secondPostsAuthor}>{elem.author}</p>
                                        </div>
                                     
                </div>
        )
      })}
           </div>
           </div>

    </div>
    </>
}
export default StoryTypes;