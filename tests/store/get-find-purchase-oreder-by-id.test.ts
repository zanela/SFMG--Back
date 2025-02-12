import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { order } from "../../variavel-global";

test.describe("Buscar um pedido pelo orderId", () => {
  const orderId = order; // ID do pedido que será buscado
  const baseUrl = setBaseUrl(); // Obtenha a URL base
  const url = `https://${baseUrl}/v2/store/order/${orderId}`; // Endpoint para buscar um pedido
  const client = new HttpClient(); // Instancie o HttpClient

  test('Deverá retornar o pedido com sucesso, status 200.', async () => {
    // Headers
    const headers = {
      "accept": "application/json", // Tipo de conteúdo aceito
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
    expect(response.data.id).toBe(orderId); // Verifique se o ID do pedido corresponde
    expect(response.data).toHaveProperty("petId"); // Verifique se a resposta contém a propriedade "petId"
    expect(response.data).toHaveProperty("quantity"); // Verifique se a resposta contém a propriedade "quantity"
    expect(response.data).toHaveProperty("status"); // Verifique se a resposta contém a propriedade "status"
    expect(response.data).toHaveProperty("complete"); // Verifique se a resposta contém a propriedade "complete"
  });
});