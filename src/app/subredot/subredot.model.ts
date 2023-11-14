export class Subredot{
  public id: number;
  public name: string;
  public description: string;
  public creationDate: Date;
  public creatorId: number;
  public creatorUsername: string;
  public numberOfPosts: number;
  public numberOfSubscribers: number;
  public isSubscribed: boolean;
  public isModerator: boolean;
  public listOfModerators: string[];
  public listOfSubscribers: string[];

  constructor(
    id: number,
    name: string,
    description: string,
    creationDate: Date,
    creatorId: number,
    creatorUsername: string,
    numberOfPosts: number,
    numberOfSubscribers: number,
    isSubscribed: boolean,
    isModerator: boolean,
    listOfModerators: string[],
    listOfSubscribers: string[]
  ){
    this.id = id;
    this.name = name;
    this.description = description;
    this.creationDate = creationDate;
    this.creatorId = creatorId;
    this.creatorUsername = creatorUsername;
    this.numberOfPosts = numberOfPosts;
    this.numberOfSubscribers = numberOfSubscribers;
    this.isSubscribed = isSubscribed;
    this.isModerator = isModerator;
    this.listOfModerators = listOfModerators;
    this.listOfSubscribers = listOfSubscribers;
  }
}
