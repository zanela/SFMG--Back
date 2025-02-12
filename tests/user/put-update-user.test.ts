import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { CreateUser } from "../../Api/create-user.mappers";
import { username } from "../../variavel-global";

test.describe("Atualizar os dados de um usuário", () => {
  
  
  const client = new HttpClient(); // Instancie o HttpClient
  const id = 5;
  const userName = username;
  const firstName = "Paul";
  const lastName = "Cabra";
  const email = "test@teste.com";
  const password = "12345678";
  const phone = "41998789898" ;
  const userStatus = 1;
  const baseUrl = setBaseUrl(); // Obtenha a URL base
  const url = `https://${baseUrl}/v2/user/${username}`; // Endpoint para atualizar um usuário

  test('Deverá atualizar os dados de um usuário com sucesso, status 200.', async () => {
    

     const atualizaUser = CreateUser(
             id,
             userName,
             firstName,
             lastName,
             email,
             password,
             phone,
             userStatus
        );

  
  
      // Faça a requisição PUT
      const response = await client.makePut(url,atualizaUser);
  
      console.log("Response:", response); // Log da resposta completa
      console.log("Response Data:", response.data); // Log da resposta data
      console.log("Response Status:", response.status); // Log da resposta status
  
      // Verifique a resposta
      expect(response.status).toBe(200); // Verifique o status da resposta
      expect(response.data).toBeDefined(); // Verifique se os dados foram retornados
      expect(typeof response.data).toBe("object"); // Verifique se a resposta é um objeto
      
    });
  });