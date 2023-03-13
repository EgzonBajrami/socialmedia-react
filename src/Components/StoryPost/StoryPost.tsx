import styles from './StoryPost.module.scss'

const StoryPost = ({data}:any) =>{
   
    
   
    console.log(data);
    return <>
    <div className={styles.container}>
        <div className={styles.imgContainer}>
            <img src={process.env.REACT_APP_API_URL + data.images[0]} alt="story" />
        </div>
        <div className={styles.content}>
            <div className={styles.title}>
                <p>{data.title}</p>
            </div>
            <div className={styles.text}>
                <p> {data.storyText.split('\n').map(function(item:any) {
        return (<>
      
          {item}
          <br/>
          </>
        )
      })}   </p>
            </div>

        </div>
        {data && data.additionalText.map(function(item:any){
            return(
                <div className={styles.extraWrapper}>
                    <div className={styles.doubleImages}>
                        <img src={process.env.REACT_APP_API_URL +item.imageOne} alt="imageOne" />
                        <img src={process.env.REACT_APP_API_URL +item.imageTwo} alt="imageTwo" />
                        </div>
                        <div className={styles.content}>
           
            <div className={styles.text}>
                <p> {item.storyText.split('\n').map(function(item:any) {
        return (<>
      
          {item}
          <br/>
          </>
        )
      })}   </p>
            </div>

        </div>
                    </div>
            )

        })}

    </div>
    </>
}
export default StoryPost;