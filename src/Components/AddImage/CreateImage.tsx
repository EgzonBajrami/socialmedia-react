
import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux'
import {useRef, useState} from 'react';

const CreateImage = ({changeImg}:any) =>{
    const auth = useSelector((state:any)=>state.auth.data);
    const fileRef = useRef<HTMLInputElement | null>(null);
    const [imageUrl, setImageUrl] = useState<string>();
    // eslint-disable-next-line


    const handleImageChange = async (e:React.SyntheticEvent) =>{
        e.preventDefault();
        changeImage(fileRef.current?.files)
  
      
      
    }
    const changeImage = async(file:any)=>{
        console.log(file);
        const formData = new FormData();
        formData.append('story-image',file[0]);
        const editConfig = {
            headers:getHeaderStructure(auth.token),
          
            data:formData
        }
        
        try{
            const result = await api.call(endpoints.addImage,editConfig);
            console.log(result);
            if(result.success){
                console.log(result.data);
              
                changeImg(result.data);


            }
      
            
        }catch(err){

        }
       
    }
    return <>
    {imageUrl ?(<>
    <div className="image-div">
        
        <p>Your story has been successfully added</p>
    </div>
    
    </>):(<>
 
    <div className="create-wrapper">
        <div className="mb-3">
        <input ref={fileRef} type="file"  onChange={handleImageChange} name="story-image" accept="image/jpeg" />
        </div>
    </div>
    </>)}
    </>
}
export default CreateImage;