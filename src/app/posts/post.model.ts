export class Post {
  public id: string;
  public title: string;
  public content: string;
  public createdDate: Date;
  public modifiedDate: Date;
  public author: string;
  public rating: number;
  public comments: Comment[];
  public subredot: string;

  constructor(id: string, title: string, content: string, createdDate: Date, modifiedDate: Date, author: string, rating: number, comments: Comment[], subredot: string){
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdDate = createdDate;
    this.modifiedDate = modifiedDate;
    this.author = author;
    this.rating = rating;
    this.comments = comments;
    this.subredot = subredot;
  }
}
