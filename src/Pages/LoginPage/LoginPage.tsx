import styles from './LoginPage.module.scss'
import {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import {api, endpoints} from '../../Lib/Api';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Lib/store/slices/auth';
const LoginPage = () =>{
    const dispatcher = useDispatch();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigate = useNavigate();
    const handleSubmit = async(e:React.SyntheticEvent) =>{
        e.preventDefault();
        const data ={
            email,
            password
        }
        const config = {
            data:data
        }
        const result = await api.call(endpoints.login, config);
        console.log(result);
        if(result.success){
            dispatcher(login(result.data))
            setTimeout(()=>{
                navigate('/')
            },3000)
            
        }


    }
    return<>
    <div className={styles.container}>
    <Form onSubmit={handleSubmit}>
       
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your email:</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter your  email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        
       
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your password:</Form.Label>
        <Form.Control type="password" 
        placeholder="Enter your password:" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        
       
      </Form.Group> 
      <div className={styles.btnwrapper}>

      <Button type="submit">Log in</Button>
      </div>

      </Form>

    </div>
    </>
}
export default LoginPage;