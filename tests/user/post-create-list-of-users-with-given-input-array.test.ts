import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { CreateUser } from "../../Api/create-user.mappers";

test.describe("Criar um novo Usuario Array", () => {

    const baseUrl = setBaseUrl(); // Obtenha a URL base
    const url = `https://${baseUrl}/v2/user/createWithList`;
    const client = new HttpClient();
    const id = 0;
    const username = "";
    const firstName = "";
    const lastName = "";
    const email = "";
    const password = "";
    const phone = "" ;
    const userStatus = 0;
   
  test('Deverá criar um novo Usuario tipo Array, status 200.', async () => {
   
    const adicionaUserListDto = CreateUser(
        id,
        username,
        firstName,
        lastName,
        email,
        password,
        phone,
        userStatus
    );

    // Headers
    const headers = {
      "Content-Type": "application/json",
    };

    console.log("URL:", url);
    console.log("Headers:", headers);
    console.log("Body:", adicionaUserListDto);

    // Faça a requisição POST
    const response = await client.makePost(url, adicionaUserListDto);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
   
    
  });
});