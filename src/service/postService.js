import axios from "axios";


const baseUrl = "http://localhost:8080/api/posts";
export const getAllPosts = () => {
    return axios.get(baseUrl + "/allposts");
}

export const getAllPostsByParentId = (parentId) => {
    return axios.get(baseUrl + "/byparent/" + parentId);
}

export const addPost = (post) => {
    return axios.post(baseUrl + "/addpost", post);
}
