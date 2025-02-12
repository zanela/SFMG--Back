import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { userName, Password } from "../../variavel-global";

test.describe("Obter detalhes de um animal de estimação por ID", () => {
  const client = new HttpClient(); // Instancie o HttpClient
  // Obtenha a URL base
  const baseUrl = setBaseUrl();
  const username = userName; 
  const password = Password;
  // Construa a URL corretamente
  const url = `https://${baseUrl}/v2/user/login?username=${username}&password=${password}`;
  // Headers
  const headers = {
    "Content-Type": "application/json",
  };

  test('Deverá retornar os detalhes de um animal de estimação com sucesso, status 200.', async () => {
    

    console.log("URL:", url);
    console.log("Headers:", headers);

    // Faça a requisição GET
    const response = await client.makeGet(url, headers);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta

  });
});