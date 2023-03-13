import styles from './StoryParts.module.scss';
import {Form,Button} from 'react-bootstrap';
import {useState} from 'react';
import CreateImage from '../../AddImage/CreateImage';
import {api,endpoints} from '../../../Lib/Api'
import {useSelector} from 'react-redux';
import { getHeaderStructure } from '../../../Lib/helper';
import {useNavigate} from 'react-router-dom'
const StoryParts = ({id}:any) =>{
    const navigate = useNavigate();
    const auth = useSelector((state:any)=>state.auth.data)
    const [storyText, setStoryText] = useState('');
    const [initialImage, setInitialImage] = useState<string>();
    const [secondImg, setSecondImg] = useState<string>();
    const [sbm, setSbm] = useState<string>();
    console.log(initialImage);
    console.log(secondImg);
    const handleSubmit = async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data = {
         
            storyText,
            initialImage,
            secondImg
        }
        const config = {
            headers: getHeaderStructure(auth.token),
            params:[id],
            data:data
        }
        console.log(data);
        const result = await api.call(endpoints.addExtra, config);
        console.log(result);
        if(result.success){
            if(sbm==='done'){
                setTimeout(()=>{
                    navigate(`/stories/${id}`)
                })
              

            }else{
                setStoryText('');
                setInitialImage('');

            }
        }
    }
    return<>
        <div className={styles.container}>
    <Form
    onSubmit={handleSubmit}
    className={styles.topStoryForm}>


        <Form.Group className="mb-3">
              <Form.Label>Story text </Form.Label>
              <textarea
                rows={4}
                required
                className="form-control"
                value={storyText}
                onChange={(e) => {
                  setStoryText(e.target.value)
                }}
                placeholder="Type story text"
              />
            </Form.Group>
            <CreateImage changeImg={setInitialImage} />
            <CreateImage changeImg={setSecondImg} />
            <div className={styles.btnwrapper}>
            <Button type='submit' onClick={()=>{
                setSbm('More')
            }}>Add more</Button>
            <span>
                
            </span>
            <Button type="submit"
            onClick={()=>{
                setSbm('Done')
            }}>Submit</Button>
            </div>
   
            </Form>
            </div>
    </>
}
export default StoryParts;