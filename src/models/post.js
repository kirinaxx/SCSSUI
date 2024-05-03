class post{
    constructor(id, title, postOriginal, date, numberOfLikes, parentId)
    {
        this.id = id;
        this.title = title;
        this.postOriginal = postOriginal;
        this.date = date != null ? date : new Date();
        this.numberOfLikes = numberOfLikes;
        this.parentId = parentId;
    }

}
export default post