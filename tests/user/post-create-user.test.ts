import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { CreateUser } from "../../Api/create-user.mappers";
import { username} from "../../variavel-global";

test.describe("Criar um novo pedido", () => {

    const baseUrl = setBaseUrl(); // Obtenha a URL base
    const url = `https://${baseUrl}/v2/user`;
    const client = new HttpClient();
    const id = 5;
    const userName = username;
    const firstName = "Paulo";
    const lastName = "Cabral";
    const email = "test@teste.com";
    const password = "12345678";
    const phone = "41998789898" ;
    const userStatus = 1;
   
  test('Deverá criar um novo Usuario, status 200.', async () => {
   
    const adicionaUserDto = CreateUser(
        id,
        userName,
        firstName,
        lastName,
        email,
        password,
        phone,
        userStatus
    );

     console.log(adicionaUserDto);

     // Headers
     const headers = {
      "Content-Type": "application/json",
    };

    console.log("URL:", url);
    console.log("Headers:", headers);
    

    // Faça a requisição POST
    const response = await client.makePost(url, adicionaUserDto);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status
    

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
   
    
  });
});