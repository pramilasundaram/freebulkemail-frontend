import { commonrequest } from "./ApiCall";
import { BASE_URL } from "./helper";
  
export const loginfunction=async(data,header)=>{
    return await commonrequest('POST',`${BASE_URL}/auth/login`,data,header)
}
export const registerfunction=async(data,header)=>{    
    return await commonrequest('POST',`${BASE_URL}/auth/register`,data,header)
}
export const forgotpasswordfunction=async(data,header)=>{    
    return await commonrequest('POST',`${BASE_URL}/auth/forgotpassword`,data,header)
}
export const passwordresetfunction=async(data,id,token)=>{
    return await commonrequest('POST',`${BASE_URL}/auth/resetpassword/${id}/${token}`,data)
}


//Contacts apis
export const createcontact=async(data)=>{   
    return await commonrequest('POST',`${BASE_URL}/contact`,data)
}

export const getfunction=async(user)=>{
    return await commonrequest('GET',`${BASE_URL}/contact?user=${user}`,"")    
}

export const deletecontact=async(id)=>{
    return await commonrequest('DELETE',`${BASE_URL}/contact/${id}`,{})    
}

export const getcontact=async(id)=>{
    return await commonrequest('GET',`${BASE_URL}/contact/${id}`,"")
}

export const updatecontact=async(id,data)=>{
    return await commonrequest('PUT',`${BASE_URL}/contact/${id}`,data)
}


export const sendbulkemail=async(data,option)=>{
    return await commonrequest('POST',`${BASE_URL}/bulkemail?option=${option}`,data)
}


//review apis

export const createreview=async(data)=>{   
    return await commonrequest('POST',`${BASE_URL}/review`,data)
}

export const getreviewfunction=async(user)=>{
    return await commonrequest('GET',`${BASE_URL}/review?user=${user}`,"")    
}

export const getreviews=async(user)=>{
    return await commonrequest('GET',`${BASE_URL}/review/all`,"")    
}

export const deletereview=async(id)=>{
    return await commonrequest('DELETE',`${BASE_URL}/review/${id}`,{})    
}