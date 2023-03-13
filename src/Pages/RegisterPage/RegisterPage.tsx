import styles from './RegisterPage.module.scss';
import RegisterPageForm from '../../Components/Forms/RegisterPageForm';
import {api,endpoints} from '../../Lib/Api'
import {useState} from 'react';

function RegisterPage(){
    const [successful, setSuccessful] = useState<string>();
    const submit = async(data:any) =>{
        console.log(data);
        const config ={
            data:data
        }
        console.log(config);
        const result = await api.call(endpoints.createUser,config);
        console.log(result);
        if(result.success){
            setSuccessful("Your account has been successfully created.")

        }else{
            setSuccessful("Something went wrong when creating your account. Please try again.")
        }

    }
 
    return<>
    <div className={styles.container}>
        <RegisterPageForm submit={submit}/>
        
        {successful && (<h3>Your account has been created.</h3>)}
    

    </div>
    </>
}
export default RegisterPage;