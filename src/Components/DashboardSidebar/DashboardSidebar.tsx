import styles from './DashboardSidebar.module.scss'
import {useState} from 'react';
const DashboardSidebar = ({setStoryy}:any) =>{
    const [story, setStory] = useState<string>();
    const handleClick = ()=>{
     console.log(story);
     setStoryy(story);
    }
    if(story){
        handleClick();
    }
    return <>
    <div className={styles.container}>
        <div className={styles.items}
        onClick={()=>{setStory('Top_story')}}>
            <h3>Add top story</h3>
        </div>
        <div className={styles.items}
        onClick={()=>{setStory('Others')}}>
            <h3>Add normal story</h3>
        </div>

    </div>
    </>
}
export default DashboardSidebar;