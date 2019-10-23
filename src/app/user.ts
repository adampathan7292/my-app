import { Role } from './role';
import { Profile } from './profile';

export class User {
    userId: number;
       
        username: string;
        password: string;
        active: boolean;
        role: Role[];
        profile:Profile;
        token:string;
}
