import axios from "axios";


const baseUrl = "http://localhost:8080/api/posts";
export const getAllPosts = () => {
    return axios.get(baseUrl + "/allposts");
}

export const getAllPostsByParentId = (parentId) => {
    return axios.get(baseUrl + "/byparent/" + parentId);
}

export const getAllPostsByTagId = (tagIds) => {
    return axios.post(baseUrl + "/bytags", tagIds);
}


export const addPost = (post) => {
    return axios.post(baseUrl + "/addpost", {
        id: post.id,
        title: post.title,
        postOriginal: post.postOriginal,
        date: post.date,
        numberOfLikes: post.numberOfLikes,
        parentId: post.parentId
    });
}
export const addTagToPost = (postId, tagIds) => {
    return axios.post(baseUrl + '/addPostTags/' +postId, tagIds);
}
