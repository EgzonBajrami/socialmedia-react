import React, {useState} from "react";
import {Form, Button} from 'react-bootstrap'
import styles from './ReplyComment.module.scss'
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getHeaderStructure } from "../../Lib/helper";
import {api,endpoints} from '../../Lib/Api';
import {useSelector} from 'react-redux';


const ReplyComment = ({id,postId}:any) =>{
    const [comment, setComment] = useState<string>();
    const [check, setCheck] = useState(false);
    const [data, setData] = useState<any[]>([]);
    const auth = useSelector((state:any)=>state.auth.data);
    const handleSubmit = async(e:React.SyntheticEvent)=>{
        e.preventDefault();
        const data = {
            comment,
            id,
            
        }
        const config = {
            headers:getHeaderStructure(auth.token),
            params:[postId],
            data:data

        }
        const result = await api.call(endpoints.createComment, config);
        console.log(result);
        if(result.success){
            setCheck(true);
            setData([result.data]);
            
        }
    }
    return<>
    {check ?(<>
    <div className={styles.container}>
        {data &&data.map((elem:any)=>{
            return(

           

        

       <div className={styles.parentContainer} key={elem._id}>
    <div className={styles.parentContent} >
                <div className={styles.author}>
                    <p>{elem.commenter.firstName} {elem.commenter.lastName} posted at: {elem.createdAt.split('T')[0]}</p>
                    </div>
            <div className={styles.text}>
                <p>{elem.content}</p>
            </div>
            <div className={styles.reply}>

            </div>
            </div>
            </div>
 )})}
        
    </div>
    </>):(<>
  
        <Form className={styles.container}
        onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
              
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

            <Button type="submit"><FontAwesomeIcon className={styles.replyBtn} size="lg" icon={faPaperPlane} /></Button>
            </div>
        </Form>
        </>)}
    </>
}
export default ReplyComment;