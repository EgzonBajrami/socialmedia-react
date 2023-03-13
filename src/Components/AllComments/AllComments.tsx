import {api,endpoints} from '../../Lib/Api';
import {useEffect, useState} from 'react';
import styles from './AllComments.module.scss'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Button} from 'react-bootstrap';
import ReplyComment from '../ReplyComment/ReplyComment';

const AllComments = ({id}:any) =>{
    const [data, setData] = useState<any[]>([])
    const [replyId, setReplyId] = useState<string>();
    const [submit,setSubmit] = useState<string>(id);
    console.log(submit);
    useEffect(()=>{
        const getData = async() =>{
            const config={
                params:[id]
            }
            const result = await api.call(endpoints.getComments, config);
           
            if(result.success){
                setData(result.data);
            }
        }
        getData();

    },[submit])
    console.log(data);
    const handleReplyClick = (elem:string) =>{
        console.log(elem);
        setReplyId(elem);

    }
    return<>
    <div className={styles.container}>

 
    {data&& data.map((elem)=>{
        return(
           <div className={styles.parentContainer}>
            <div className={styles.parentContent}>
                <div className={styles.author}>
                    <p>{elem.commenter.firstName} {elem.commenter.lastName} posted at: {elem.createdAt.split('T')[0]}</p>
                    </div>
            <div className={styles.text}>
                <p>{elem.content}</p>
            </div>
            <div className={styles.reply}>

            <Button onClick={()=>handleReplyClick(elem._id)}
            ><FontAwesomeIcon className={styles.replyBtn} size="sm" icon={faReply} /> </Button>
            </div>
            </div>
            {replyId===elem._id &&(<ReplyComment id={replyId} postId={id} setSubmit={setSubmit}/>)}
            {elem &&elem.children.map((second:any)=>{
                return(
                    <div className={styles.childContainer}>

                    <div className={styles.parentContent}>
                    <div className={styles.author}>
                    <p>{second.commenter.firstName} {second.commenter.lastName} posted at: {second.createdAt.split('T')[0]}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{second.content}</p>
                    </div>
                    <div className={styles.reply}>
        
                    <Button onClick={()=>handleReplyClick(second._id)}
                    ><FontAwesomeIcon className={styles.replyBtn} size="sm" icon={faReply} /> </Button>
                    </div>
                    </div>
                    {replyId===second._id &&(<ReplyComment id={second._id} postId={id} />)}
                    {second &&second.children.map((third:any)=>{
                        return(
                            <div className={styles.childContainer}>
                                <div className={styles.parentContent}>
                    <div className={styles.author}>
                    <p>{third.commenter.firstName} {third.commenter.lastName} posted at: {third.createdAt.split('T')[0]}</p>
                    </div>
                    <div className={styles.text}>
                        <p>{third.content}</p>
                    </div>
                    <div className={styles.reply}>

                    </div>
                    </div>
                                </div>

                        )})}
                    </div>
                )
            })}
            
            

           </div>
        )
    })}
       </div>

    </>
}
export default AllComments;