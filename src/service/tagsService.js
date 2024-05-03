import axios from "axios";


const baseUrl = "http://localhost:8080/api/tags";
export const getAllTags = () => {
    return axios.get(baseUrl + "/alltags");
}


export const addPost = (post) => {
    return axios.post(baseUrl + "/addtag", {
        id: post.id,
        tag: post.tag,
    });
}
