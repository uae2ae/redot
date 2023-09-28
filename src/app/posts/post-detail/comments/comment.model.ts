export class Comment{
  public id: string;
  public author: string;
  public content: string;
  public createdDate: Date;
  public modifiedDate: Date;
  public rating: number;
  public replies: Comment[];
  public parentId: string;
  public postId: string;

  constructor(id: string, author: string, content: string, createdDate: Date, modifiedDate: Date, rating: number, replies: Comment[], parentId: string, postId: string){
    this.id = id;
    this.author = author;
    this.content = content;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.rating = rating;
    this.replies = replies;
    this.parentId = parentId;
    this.postId = postId;
  }

}
