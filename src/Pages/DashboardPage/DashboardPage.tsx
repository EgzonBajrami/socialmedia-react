import DashboardSidebar from '../../Components/DashboardSidebar/DashboardSidebar';
import styles from './DashboardPage.module.scss'
import {useState} from 'react';
import TopStoryForm from '../../Components/Forms/TopStoryForm/TopStoryForm';
const DashboardPage = () =>{
    const [story, setStoryy] = useState<string>('');
    console.log(story);
    return<>
    <div className={styles.container}>
        <DashboardSidebar setStoryy={setStoryy} />
        {story==='Top_story' &&(<>
        <TopStoryForm />
        </>)}
    </div>

    </>
}
export default DashboardPage;