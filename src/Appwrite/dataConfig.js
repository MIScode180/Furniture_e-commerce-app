import config from "../configure/config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class DataConfig {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(config.appwriteEndpoint)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  // PRODUCT SETUP

  //Create Products

  async createProduct({
    productId,
    title,
    description,
    price,
    category,
    stock,
    images,
    featured,
    permissions = [],
  }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionProductsId,
        ID.unique(),
        productId,
        {
          title,
          description,
          price,
          category,
          stock,
          images,
          featured,
          permissions,
        }
      );
    } catch (error) {
      console.error("createProduct error:", error.message);
      throw error;
    }
  }
  // All Products Get

  async listProducts({
    category,
    featured,
    search,
    limit = 20,
    orderBy = "title",
    order = "asc",
  } = {}) {
    try {
      const queries = [Query.limit(limit)];

      if (category) queries.push(Query.equal("category", category));
      if (featured !== undefined)
        queries.push(Query.equal("featured", featured));
      if (search) queries.push(Query.search("title", search));

      // Sorting (must match one of your indexed fields)
      if (order === "asc") {
        queries.push(Query.orderAsc(orderBy));
      } else {
        queries.push(Query.orderDesc(orderBy));
      }

      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionProductsId,
        queries
      );
    } catch (error) {
      console.error("listProducts error:", error.message);
      throw error;
    }
  }

  async getProduct({ productId }) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionProductsId,
        productId
      );
    } catch (error) {
      console.log("Appwrite serive :: getPost :: error", error);
      return false;
    }
  }

  // Update Product

  async updateproduct(
    productId,
    { title, description, price, category, stock, images, featured }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionProductsId,
        productId,
        { title, description, price, category, stock, images, featured }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  //Delete product

  async deleteproduct(productId) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionProductsId,
        productId
      );
      return true;
    } catch (error) {
      console.log("Appwrite serive :: deletePost :: error", error);
      return false;
    }
  }

  //ORDER Setup

  async createOrder(
    orderId,
    {
      userId,
      items,
      totalAmount,
      address,
      status,
      paymentId,
      createdAt,
      permissions = [],
    }
  ) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionOrdersId,
        ID.unique(),
        {
          orderId,
          userId,
          items,
          totalAmount,
          address,
          status,
          paymentId,
          createdAt,
          permissions,
        }
      );
    } catch (error) {
      console.error("createProduct error:", error.message);
      throw error;
    }
  }
  //order gets

  async listOrders(userId) {
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionOrdersId,
        // [Query.equal("userId", userId), Query.orderDesc("createdAt")]
        [
          Query.equal("userId", userId),
          Query.orderDesc("$createdAt"), // use Appwrite’s built-in timestamp
        ]
      );
    } catch (error) {
      console.error(" listOrders error:", error.message);
      throw error;
    }
  }

  // get A order

  async getOrder(orderId) {
    try {
      return await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionOrdersId,
        orderId
      );
    } catch (error) {
      console.error("getOrder error:", error.message);
      throw error;
    }
  }

  //Update Order
  async updateorder(
    orderId,
    { userId, items, totalAmount, address, status, paymentId, createdAt }
  ) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionOrdersId,
        orderId,
        { userId, items, totalAmount, address, status, paymentId, createdAt }
      );
    } catch (error) {
      console.log("Appwrite serive :: updatePost :: error", error);
    }
  }

  //   delete Order

  async deleteOrder(orderId) {
    try {
      return await this.databases.deleteDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionOrdersId,
        orderId
      );
    } catch (error) {
      console.error(" deleteOrder error:", error.message);
      throw error;
    }
  }

  // {Contact us form data}
  async createContact({ name, email, message }) {
  try {
    return await this.databases.createDocument(
      config.appwriteDatabaseId,
      config.appwriteCollectionContactusId, // add this ID in your config.js
      ID.unique(),
      { name, email, message }
    );
  } catch (error) {
    console.error("createContact error:", error.message);
    throw error;
  }
}

  //   FIle or Images Uplaod

  async uploadFile(file) {
    try {
      return await this.Storage.CreateFile(
        config.appwriteBucketStorage,
        ID.unique(),
        file
      );
    } catch (error) {
      console.error(" uploadFile error:", error.message);
      throw error;
    }
  }

  async deleteProductImage(fileId) {
    try {
      return await this.storage.deleteFile(
        config.appwriteBucketStorage,
        fileId
      );
    } catch (error) {
      console.error(" deleteProductImage error:", error.message);
      throw error;
    }
  }

  getProductImagePreview(fileId) {
    return this.storage.getFilePreview(config.appwriteBucketStorage, fileId);
  }
}

const dataConfig = new DataConfig();
export default dataConfig;
