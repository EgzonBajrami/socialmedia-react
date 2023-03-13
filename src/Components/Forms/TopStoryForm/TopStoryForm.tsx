import styles from './TopStoryForm.module.scss'
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import {api, endpoints} from '../../../Lib/Api'
import { getHeaderStructure } from '../../../Lib/helper';
import { useSelector } from 'react-redux';
import CreateImage from '../../AddImage/CreateImage';
import StoryParts from '../StoryParts/StoryParts';
const TopStoryForm = () =>{
    const auth = useSelector((state:any)=>state.auth.data)
    const [title, setTitle] = useState<string>();
    const [author, setAuthor] = useState<string>();
    const [storyText, setStoryText] = useState<string>();
    const [id, setId] = useState<string>();
    const [initialImage, setInitialImage] = useState<string>();
    console.log(initialImage);
    const [storyForm, setStoryForm] = useState<string>();
    const handleSubmit = async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data ={
            title,
            author,
            storyText,
            storyForm,
            initialImage
        }
        const config ={
            headers: getHeaderStructure(auth.token),
            data:data
        }
        const result = await api.call(endpoints.topStory, config);
        console.log(result);
        if(result.success){
            setId(result.data._id);
        }

    }
    
    return<>
    {id ?(<>
    <StoryParts id={id} />
    
    </>):(<>
        <div className={styles.container}>
        <Form onSubmit={handleSubmit}
        className={styles.topStoryForm}>

        
    <Form.Group className="mb-3">
              <Form.Label>Story title</Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                placeholder="Enter story title"
              />
            </Form.Group>
            <Form.Select className="mb-3"
               value={storyForm}
               onChange={(e) => {
                 setStoryForm(e.target.value)
               }}>
              <Form.Label>Story Type</Form.Label>
              <option>Story Type</option>
              <option value='Top_story'>Top Story</option>
              <option value='Politics'>Politics</option>
              <option value='Justice'>Justice</option>
              <option value='National_Security'>National Security</option>
              <option value='World'>World</option>
              <option value='Technology'>Technology</option>
              <option value='Environment'>Environment</option>
          
            </Form.Select>
            <Form.Group className="mb-3">
              <Form.Label>Story author </Form.Label>
              <input
                type="text"
                required
                className="form-control"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value)
                }}
                placeholder="Type story author name"
              />
            </Form.Group>
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
            <CreateImage changeImg={setInitialImage}  />
            <div className={styles.btnwrapper}>
                <Button type='submit'>Next</Button>
            </div>
            
            </Form>

    </div>
    
    </>)}
    
    </>
}
export default TopStoryForm;