import styles from './TopStory.module.scss'
import {api, endpoints} from '../../Lib/Api';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
const TopStory = () =>{
    const navigate = useNavigate();
    const [data, setData] = useState<any>([]);
    const [imageData, setImageData] = useState<string>('');
    useEffect(()=>{
        const getData = async() =>{
            const result = await api.call(endpoints.getTop);
            console.log(result);
            if(result.success){
                setData(result.data);
                setImageData(result.data[0].images[0])
            }
        }
        getData();
    },[])
    console.log(data);
    return<>


    
    <div className={styles.container}>
        {data.length>0&& (
    <>
   
     
        <div className={styles.imgContainer}
        onClick={()=>{
            navigate(`/stories/${data[0]._id}`)
        }}>

            
            <img src={process.env.REACT_APP_API_URL + `${imageData}`} />
        </div>
        <div className={styles.headline}>
            <p>{data[0].title}</p>
            <h3>{data[0].author}</h3>
            
        </div>
        <div className={styles.author}>
    
         
        </div>
        </>
        

   
    )}
     </div>
    
    </>
}
export default TopStory;