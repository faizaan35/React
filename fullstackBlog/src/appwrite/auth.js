import conf from '../conf.js'
import {Client, Account , ID} from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account= new Account(this.client);
        
    }
}

const autherService = new AuthService();



export default autherService