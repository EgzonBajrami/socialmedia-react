import styles from './CommentSection.module.scss'
import {Form, Button} from 'react-bootstrap';
import {useState} from 'react';
import { getHeaderStructure } from '../../Lib/helper';
import {api,endpoints} from '../../Lib/Api'
import {useSelector} from 'react-redux';
import AllComments from '../AllComments/AllComments';
const CommentSection = ({id}:any) =>{
    const auth = useSelector((state:any)=>state.auth.data)
    const [comment, setComment] = useState<string>();
    const handleSubmit = async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data = {
            comment,
          
        }
        const config = {
            headers: getHeaderStructure(auth.token),
            params:[id],
            data:data
        }
        const result = await api.call(endpoints.createComment,config);
        console.log(result);
    }
 
    return<>
    <div className={styles.container}>
        <Form
        onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
              <Form.Label>If you have anything to say: </Form.Label>
              <textarea
                rows={4}
                required
                className="form-control"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value)
                }}
                placeholder="Please be polite and respectful:"
              />
            </Form.Group>
            <div className={styles.btnwrapper}>

            <Button type="submit">Submit comment</Button>
            </div>
        </Form>
  
    <AllComments id={id} />

    </div>
    </>
}
export default CommentSection;