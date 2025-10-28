// import { Client, Account, ID, OAuthProvider } from "appwrite";
// import  config  from "../configure/config";

// export class AuthConfig {
//   client = new Client();
//   account;

//   constructor() {
//     this.client
//       .setEndpoint(config.appwriteEndpoint)
//       .setProject(config.appwriteProjectId);
//     this.account = new Account(this.client);
//   }

//   // Singup

//   async Signup({ email, password, name }) {
//     try {
//       return await this.account.create(ID.unique(), email, password, name);
//     } catch (error) {
//       console.log("Account not Created ");
//       throw error;
//     }
//   }

//   //Auth Login

//   // async loginWithGoogle() {
//   //   try {
//   //    return  this.account.createOAuth2Session(OAuthProvider.Google ,"http://localhost:5173/home",
//   //     "http://localhost:5173/");
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }
//   loginWithGoogle() {
//     // Will redirect, no point in returning value
//     this.account.createOAuth2Session(
//       OAuthProvider.Google,
//       `${window.location.origin}/home`,  // success redirect URL
//       `${window.location.origin}/`       // failure redirect URL
//     );
//   }
  



//   //Login

//   async login({ email, password }) {
//     try {
//       return await this.account.createEmailPasswordSession(email, password);
//     } catch (error) {
//       throw error;
//     }
//   }

//   //get Current User
//   async getCurrentUser() {
//     try {
//       return await this.account.get();
//     } catch (error) {
     
//       console.log("Appwrite service :: getCurrentUser :: error", error);
//     }

//     return null;
//   }

//   //logout

//   // async logout() {
//   //   try {
//   //     await this.account.deleteSessions("current");
//   //   } catch (error) {
//   //     console.log("Appwrite serive :: logout :: error", error);
//   //   }
//   // } 
//   async logout() {
//   try {
//     await this.account.deleteSession("current"); 
//   } catch (error) {
//     console.log("Appwrite service :: logout :: error", error);
//   }
// }
// }

// const authConfig = new AuthConfig();

// export default authConfig;


// src/Appwrite/authConfig.js
import { Client, Account, ID, OAuthProvider } from "appwrite";
import config from "../configure/config"; // ✅ Correct import (no curly braces)

export class AuthConfig {
  client;
  account;

  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteEndpoint)      // ✅ Example: https://syd.cloud.appwrite.io/v1
      .setProject(config.appwriteProjectId);     // ✅ Your Appwrite project ID

    this.account = new Account(this.client);
  }

  // ✅ Signup new user
  async Signup({ email, password, name }) {
    try {
      return await this.account.create(ID.unique(), email, password, name);
    } catch (error) {
      console.error("Appwrite service :: Signup :: error", error);
      throw error;
    }
  }

  // ✅ Login with email/password
  
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error("Appwrite service :: login :: error", error);
      throw error;
    }
  }

  // ✅ Get currently logged-in user
  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
    } catch (error) {
      console.error("Appwrite service :: getCurrentUser :: error", error);
      return null;
    }
  }

  // ✅ Google OAuth login (redirects automatically)
  loginWithGoogle() {
    this.account.createOAuth2Session(
      OAuthProvider.Google,
      `${window.location.origin}/home`,  // success redirect
      `${window.location.origin}/login`  // failure redirect
    );
  }

  // ✅ Logout current session
  async logout() {
    try {
      await this.account.deleteSession("current");
    } catch (error) {
      console.error("Appwrite service :: logout :: error", error);
    }
  }
}

// ✅ Export a singleton instance
const authConfig = new AuthConfig();
export default authConfig;
