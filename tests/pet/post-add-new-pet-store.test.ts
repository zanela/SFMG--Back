import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { AddPetMappers } from "../../Api/add-pet.mappers";
import { id } from "../../variavel-global";

test.describe("Adicionar um novo animal de estimação", () => {

    const baseUrl = setBaseUrl(); // Obtenha a URL base
    const url = `https://${baseUrl}/v2/pet/uploadImage`;
    const client = new HttpClient();
    const name = "DogTeste";
    const petId = id;
    const status = "pending";
   
  test('Deverá adicionar um novo animal de estimação com sucesso, status 200.', async () => {
    // Obtenha a URL base
    const baseUrl = setBaseUrl();

    // Construa a URL corretamente
    const url = `https://${baseUrl}/v2/pet`;

    // Dados do animal de estimação
    const adicionandoPetDto = AddPetMappers(
        petId,
        name,
        status
       );

    // Headers
    const headers = {
      "Content-Type": "application/json",
    };

    console.log("URL:", url);
    console.log("Headers:", headers);
    console.log("Body:", adicionandoPetDto);

    // Faça a requisição POST
    const response = await client.makePost(url, adicionandoPetDto);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
   
    
  });
});