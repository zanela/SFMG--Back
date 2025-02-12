import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { UpdatePetMappers } from "../../Api/update-existing-pet.mappers";
import { id } from "../../variavel-global";

test.describe("Adicionar ou atualizar um animal de estimação", () => {
  const client = new HttpClient(); // Instancie o HttpClient
   // Obtenha a URL base
   const baseUrl = setBaseUrl();
   // Construa a URL corretamente
   const url = `https://${baseUrl}/v2/pet`;
 
    const name = "DogTeste";
    const petId = id;
    const status = "pending";
    const photoUrls = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdp7536mSL4s4jaL7USJzzKb0J1fulzHZtMA&s";

  test('Deverá atualizar um animal de estimação com sucesso, status 200.', async () => {
   
    try{
           const adicionandoPetDto = UpdatePetMappers(

             petId,
             name,
             status,
             photoUrls

            );

    console.log("URL:", url);
    
    

    // Faça a requisição PUT
    const response = await client.makePut(url,adicionandoPetDto);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta

    
    }catch(error){

        console.log(JSON.stringify(error.response?.data));
    }
  });
});