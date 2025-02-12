import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { username } from "../../variavel-global";


test.describe("Remover um animal de estimação", () => {
  const client = new HttpClient(); // Instancie o HttpClient

  test('Deverá remover um animal de estimação com sucesso, status 200.', async () => {
    // Obtenha a URL base
    const baseUrl = setBaseUrl();
    const userName = username; 
    // Construa a URL corretamente
    const url = `https://${baseUrl}/v2/user/${username}`;
    // Headers
    const headers = {
      "api_key": "special-key", 
    };

    console.log("URL:", url);
    console.log("Headers:", headers);

    // Faça a requisição DELETE
    const response = await client.makeDelete(url, headers);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta

    // Verifique se a resposta contém a mensagem de sucesso
    if (response.data) {
      expect(response.data.message).toContain(userName.toString()); // Verifique se o ID está na resposta
    } else {
      console.warn("A resposta não contém dados. Verifique se o animal foi removido corretamente.");
    }
  });
});