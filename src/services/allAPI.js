import { commonAPI } from "./commonAPI";
import { SERVER_URL } from "./server_url";

// upload image -store image 
export const uploadImageAPI=async(image)=>{
    return await commonAPI("POST",`${SERVER_URL}/images`,image)
}

// get image api called by view

export const getAllImageAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/images`,"")
}


// remove image by image card


export const removeImageAPI=async(imageId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/images/${imageId}`,{})
}

// upload category
export const uploadCategoryAPI=async(categorydetails)=>{
    return await commonAPI("POST",`${SERVER_URL}/categories`,categorydetails)
}


// get category to category component
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${SERVER_URL}/categories`,"")
}

// remove category api
export const removeCategoryAPI=async(categoryId)=>{
    return await commonAPI("DELETE",`${SERVER_URL}/categories/${categoryId}`,{})
}

// get single image api
export const getAImageAPI=async(imageId)=>{
    return await commonAPI("GET",`${SERVER_URL}/images/${imageId}`,"")
}
// updated category
export const updateCategoryAPI=async(categoryId,updatedCategoryDetails)=>{
    return await commonAPI("PUT",`${SERVER_URL}/categories/${categoryId}`,updatedCategoryDetails)
}