import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";

test.describe("Filtrar animais de estimação por status", () => {
    const client = new HttpClient(); // Instancie o HttpClient
    // Obtenha a URL base
    const baseUrl = setBaseUrl();
    // Status para filtrar (pode ser um ou mais valores separados por vírgulas)
    const status = "sold"; // Filtra por "available" e "pending
    // Construa a URL corretamente
    const url = `https://${baseUrl}/v2/pet/findByStatus?status=${status}`;
    // Headers
    const headers = {
      "Content-Type": "application/json",
    };
  
    test('Deverá retornar uma lista de animais de estimação com base no status, status 200.', async () => {
      // Obtenha a URL base      
  
      console.log("URL:", url);
      console.log("Headers:", headers);
  
      // Faça a requisição GET
      const response = await client.makeGet(url, headers);
  
      console.log("Response:", response); // Log da resposta completa
      console.log("Response Data:", response.data); // Log da resposta data
      console.log("Response Status:", response.status); // Log da resposta status
  
      // Verifique a resposta
      expect(response.status).toBe(200); // Verifique o status da resposta
  
      // Verifique se a resposta é um array
      expect(Array.isArray(response.data)).toBe(true);
  
      // Verifique se todos os animais na lista têm um dos status fornecidos
      const validStatuses = status.split(","); // Converte a string de status em um array
      response.data.forEach((pet: any) => {
        expect(validStatuses).toContain(pet.status); // Verifica se o status do pet está na lista de status válidos
      });
    });
  });