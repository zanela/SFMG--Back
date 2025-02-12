import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { id } from "../../variavel-global";

test.describe("Obter detalhes de um animal de estimação por ID", () => {
  const client = new HttpClient(); // Instancie o HttpClient
  // Obtenha a URL base
  const baseUrl = setBaseUrl();
  // ID do animal de estimação
  const petId = id; // Substitua pelo ID do animal que deseja consultar
  // Construa a URL corretamente
  const url = `https://${baseUrl}/v2/pet/${petId}`;
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

    // Verifique se a resposta contém os dados esperados
    expect(response.data.id).toBe(petId); // Verifique se o ID do animal corresponde ao esperado
    expect(response.data.name).toBeDefined(); // Verifique se o nome do animal está definido
    expect(response.data.status).toBeDefined(); // Verifique se o status do animal está definido
  });
});