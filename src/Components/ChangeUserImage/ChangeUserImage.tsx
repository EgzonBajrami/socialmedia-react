
import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import {useRef, useState} from 'react';
import styles from './ChangeUserImage.module.scss';

const ChangeUserImage = ({changeImg}:any) =>{
    const auth = useSelector((state:any)=>state.auth.data);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string>();
    // eslint-disable-next-line
    console.log(changeImg);


    const handleImageChange = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        changeImage(fileRef.current?.files)
  
      
      
    }
    const changeImage = async(file:any)=>{
        console.log(file);
        const formData = new FormData();
        formData.append('user-image',file[0]);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
            params:[changeImg],
          
            data:formData
        }
        
        try{
            const result = await api.call(endpoints.changeUserImage,editConfig);
            console.log(result);
            if(result.success){
                console.log(result.data);
                setImageUrl('Done');
              
            


            }
      
            
        }catch(err){

        }
       
    }
    return <>
    {imageUrl ?(<>
    <div className="image-div">
        
        <p>Your image has been successfully changed</p>
    </div>
    
    </>):(<>
 
    <div className="create-wrapper">
        
        <p className={styles.createWrapperP}>Change profile image</p>
        <input ref={fileRef} type="file"  onChange={handleImageChange} name="story-image" accept="image/jpeg" />
    
    </div>
    </>)}
    </>
}
export default ChangeUserImage;