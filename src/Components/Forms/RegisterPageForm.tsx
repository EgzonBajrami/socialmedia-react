import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import styles from './RegisterPageForm.module.scss'
interface RegisterProps {
    submit:(params:any)=>void
}
const RegisterPageForm = ({submit}:RegisterProps) =>{
    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');
    const [age, setAge] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const handleSubmit = (e:React.SyntheticEvent) =>{
        e.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            password,
            confPassword,
            age
        }
        console.log(data);
        if(password!==confPassword){
            setError('Password and confirm password do not match.')

        }
        submit(data);
    }
    return<>
  
    <Form className={styles.formContainer} onSubmit={handleSubmit}>
        <div className={styles.formHolder}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter your first name" 
        value={firstName}
        onChange={(e)=>setName(e.target.value)}/>
        
       
      </Form.Group> 
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter your last name" 
        value={lastName}
        onChange={(e)=>setLastName(e.target.value)}/>
        </Form.Group>
  

        </div>
        <div className={styles.formHolder}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        
         />
      
      </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" 
        placeholder="Your age" 
        value={age}
        onChange={(e)=>setAge(Number(e.target.value))}/>
       
      </Form.Group>
      
            
        </div>
        <div className={styles.formHolder}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
        placeholder="Enter your password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
       
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm the password:"
        value={confPassword}
        onChange={(e)=>setConfPassword(e.target.value)}
        
         />
      
      </Form.Group>

        </div>
        
    <div className={styles.btn}>

      <Button type="submit">Submit</Button>
    </div>
      {error.length>0 &&(
        <div>
            <p>{error}</p>
        </div>
      )}

      </Form>
    </>
}
export default RegisterPageForm;