import styles from './PostsContainer.module.scss';
import {useLocation, useNavigate} from 'react-router-dom';
const PostsContainer = ({data}:any) =>{
    console.log(data);
    const location = useLocation();
    const navigate = useNavigate();
    let storyTyp =location.pathname.split('/')[2];

    if(storyTyp==='National_Security'){
        storyTyp = 'National Security';
    }
    return<>
    <div className={styles.container}>
       
        <div className={styles.content}>
            <div className={styles.title}>
                <p>{storyTyp}</p>
              
            </div>
            <div className={styles.discussions}>

          
            {data&&data.map((elem:any)=>{
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

    </div>
    </>
}
export default PostsContainer;