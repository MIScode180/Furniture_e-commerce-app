const config = {
  appwriteEndpoint: import.meta.env.VITE_APPWRITE_ENDPOINT,
  appwriteProjectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  appwriteDatabaseId: import.meta.env.VITE_APPWRITE_DATABASE_ID,
  appwriteCollectionProductsId: import.meta.env.VITE_APPWRITE_COLLLECTION_PRODUCTS_ID,
  appwriteCollectionOrdersId: import.meta.env.VITE_APPWRITE_COLLLECTION_ORDERS_ID,
  appwriteCollectionContactusId: import.meta.env.VITE_APPWRITE_COLLLECTION_CONTACTUS_ID,
  appwriteBucketStorage: import.meta.env.VITE_APPWRITE_BUCKET_ID,
  
};





export default config;