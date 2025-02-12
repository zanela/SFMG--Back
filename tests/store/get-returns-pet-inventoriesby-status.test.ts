import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";

test.describe("Obter inventário da loja", () => {
  const baseUrl = setBaseUrl(); // Obtenha a URL base
  const url = `https://${baseUrl}/v2/store/inventory`; // Endpoint para obter o inventário
  const client = new HttpClient(); // Instancie o HttpClient

  test('Deverá retornar o inventário da loja com sucesso, status 200.', async () => {
    // Headers
    const headers = {
      "accept": "application/json", // Tipo de conteúdo aceito
      "api_key": "1", // Chave de API (se necessário)
    };

    console.log("Headers:", headers);

    // Faça a requisição GET
    const response = await client.makeGet(url, { headers });

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
    expect(response.data).toBeDefined(); // Verifique se os dados foram retornados
    expect(typeof response.data).toBe("object"); // Verifique se a resposta é um objeto
    expect(response.data).toHaveProperty("available"); // Verifique se a resposta contém a propriedade "available"
    expect(response.data).toHaveProperty("pending"); // Verifique se a resposta contém a propriedade "pending"
    expect(response.data).toHaveProperty("sold"); // Verifique se a resposta contém a propriedade "sold"
  });
});