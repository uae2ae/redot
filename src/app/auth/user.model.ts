export class User {
  constructor(public email:string, public id:string, private _token:string, private _tokenExpirationDate:Date){
  }
  get token(){
      if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
        return null;
      }
      return this._token;
  }
}
export interface User{
  id: string;
  username: string;
  email: string;
  token: string | null;
  tokenExpirationDate: Date;
  passwordHash: string;
  passwordSalt: string;
  karma: number;
  photo: string;
  posts: string[];
  comments: string[];
  votes: string[];
  subredotsSubscription: string[];
  subredotsModerators: string[];
  role: 'user' | 'moderator' | 'admin';
}
