const endpoints = {
    createUser:{url:'users/register', method:"POST"},
    login:{url:'users/login', method:'POST'},
    topStory:{url:'news/topStory', method:'POST'},
    addImage:{url:'news/AddImage', method:'POST'},
    getTop:{url:'news/topStory', method:'GET'},
    addExtra:{url:'news/addExtra/', method:'POST'},
    getPost:{url:'news/story/', method:'GET'},
    createComment:{url:'comments/createComment/', method:'POST'},
    getComments:{url:'comments/postComments/', method:'GET'},
    createReply:{url:'comments/createReply/', method:'POST'},
    getTopStories:{url:'news/topStories', method:'GET'},
    getStories:{url:'news/stories/', method:'GET'}



}
export default endpoints;