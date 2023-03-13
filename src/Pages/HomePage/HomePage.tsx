import DiscussionHeader from '../../Components/DiscussionHeader/DiscussionHeader';
import Footer from '../../Components/Footer/Footer';
import StoryTypes from '../../Components/StoryTypes/StoryTypes';
import TopStory from '../../Components/TopStory/TopStory';
import TopStoryPosts from '../../Components/TopStoryPosts/TopStoryPosts';
import styles from './HomePage.module.scss'
const HomePage = () =>{
    const politics = "Politics"
    const justice = "Justice";
    const security ="National_Security";
    const world = "World";
    const tech = "Technology";
    const env = "Environment";
    return<>
    <div className={styles.container}>
        <TopStory />
        <div className={styles.content}>
            <DiscussionHeader />
            <TopStoryPosts />
            <StoryTypes storyForm={politics} />
            <StoryTypes  storyForm={justice} />
            <StoryTypes storyForm={security} />
            <StoryTypes storyForm={world} />
            <StoryTypes storyForm={tech} />
            <StoryTypes storyForm={env} />
        </div>
        <Footer />

    </div>
    </>
}
export default HomePage;