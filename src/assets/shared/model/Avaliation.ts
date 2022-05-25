
import { Establishment } from "./Establishment";
import { User } from "./User";

export interface Avaliation {
    id:number,
    user:User,
    establishment:Establishment,
    nota:string
}