import axios from "axios";
import FormData from "form-data"; 

export class HttpClient {

  async makePostWithFile(url: string, header: object, formData: FormData) {
    try {
      const response = await axios.post(url, formData);
      return response;

    } catch (error) {

      if (axios.isAxiosError(error)) {
        // Erro específico do Axios
        console.error("Error making POST request with file:", error.response?.data || error.message);
        return error.response || { status: 500, data: { message: "Internal Server Error" } };

      } else {
        // Outros erros
        console.error("Unexpected error:", error);
        return { status: 500, data: { message: "Internal Server Error" } };
        
      }
    }
  }

  async makePost(url: string, body: object){
   try{
    
    const response = await axios.post(url,body);
    return response;
    
   }catch(error){     
    if (axios.isAxiosError(error)) {

      // Erro específico do Axios
      console.error("Error making POST request with file:", error.response?.data || error.message);
      return error.response || { status: 500, data: { message: "Internal Server Error" } };
    } else {
      // Outros erros
      console.error("Unexpected error:", error);
      return { status: 500, data: { message: "Internal Server Error" } };
    }
   }
  }

  async makeGet(url: string, header?: object){
    try{
     const response = await axios.get(url, header);
     return response;
    }catch(error){     
     console.error("Error making POST request:", error.response);
     return error.response;
    }
   }

   async makePut(url: string, body: object){
    try{
     const response = await axios.put(url, body);
     return response;
    }catch(error){     
     console.error("Error making POST request:", error.response);
     return error.response;
    }
   }

   async makeDelete(url: string, header?: object){
    try{
     const response = await axios.delete(url, header);
     return response;
    }catch(error){     
     console.error("Error making POST request:", error.response);
     return error.response;
    }
   }
}