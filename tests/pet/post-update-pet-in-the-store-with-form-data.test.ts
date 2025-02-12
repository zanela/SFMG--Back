import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import qs from "qs"; // Biblioteca para formatar dados como x-www-form-urlencoded

test.describe("Atualizar nome e status de um pet", () => {
  const petId = 17; // ID do pet que será atualizado
  const baseUrl = setBaseUrl(); // Obtenha a URL base
  const url = `https://${baseUrl}/v2/pet/${petId}`; // Endpoint para atualizar o pet
  const client = new HttpClient(); // Instancie o HttpClient

  test('Deverá atualizar o nome e o status de um pet com sucesso, status 200.', async () => {
    // Dados a serem enviados no corpo da requisição
    const body = {
      name: "VErsus", // Novo nome do pet
      status: "status", // Novo status do pet
    };

    // Headers
    const headers = {
      "Content-Type": "application/x-www-form-urlencoded", // Tipo de conteúdo correto
    };

    // Converte o objeto body para o formato x-www-form-urlencoded
    const formData = qs.stringify(body);


    // Faça a requisição POST
    const response = await client.makePost(url, formData);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
    //expect(response.data.message).toContain("Pet updated"); // Verifique a mensagem de sucesso
  });
});