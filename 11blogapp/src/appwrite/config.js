import conf from '../conf/conf';
import { Client, Databases, Storage, Query, ID } from "appwrite";

// This is the backend service that will be used to interact with the Appwrite API.

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl) // Your API Endpoint
            .setProject(conf.appwriteProjectID) // Your project ID

        this.databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async getpost(slug) {  
        try {
            return await this.databases.getDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug);
        } catch (error) {
            console.log("Appwrite service :: getpost() ::", error);
            return false
        } 
    }

    async getposts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseID, conf.appwriteCollectionID, queries);
        } catch (error) {
            console.log("Appwrite service :: getposts() ::", error);
            return false
        }
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, 
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite service :: createPost() ::", error);
            return false
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug, 
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        } catch (error) {
            console.log("Appwrite service :: updatePost() ::", error);
            return false
        }
    }

    async deletePost(slug){
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseID, conf.appwriteCollectionID, slug);
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost() ::", error);
            return false
        }
    }

    // Storage service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID, 
                ID.unique(), 
                file
            );
        } catch (error) {
            console.log("Bucket id: " +  conf.appwriteBucketID)
            console.log("Appwrite service !!!!!!! :: uploadFile() ::", error);
            return false
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(conf.appwriteBucketID, fileId);
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile() ::", error);
            return false
        }
    }

    async getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID, 
            fileId
        ).href
    }

}

const service = new Service();

export default service
