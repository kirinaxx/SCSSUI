import axios from "axios";


const baseUrl = "http://localhost:8080/api/posts";
export const getAllPosts = () => {
    return axios.get(baseUrl + "/allposts");
}
