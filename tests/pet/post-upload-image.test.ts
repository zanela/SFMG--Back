import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import FormData from "form-data";
import fs from "fs";

test.describe("Realizando Upload de imagem", () => {
  const petId = 17; // ID do animal de estimação
  const baseUrl = setBaseUrl(); // Obtenha a URL base
  const url = `https://${baseUrl}/v2/pet/${petId}/uploadImage`;
  const client = new HttpClient(); // Instancie o HttpClient

  test('Deverá realizar upload de uma imagem com sucesso, status 200.', async () => {
 

    // Crie o FormData dentro do teste
    const formData = new FormData();
    formData.append("additionalMetadata", "Test metadata"); // Metadados adicionais
    formData.append("file", fs.createReadStream("./image/biscoitoaberto.jpg")); // Arquivo de imagem

    // Headers
    const headers = {
      "Content-Type": "multipart/form-data",
    };

    console.log("Headers:", headers);
    console.log("FormData:", formData);

    // Faça a requisição POST
    const response = await client.makePostWithFile(url, headers, formData);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
    expect(response.data.message).toContain("File uploaded"); // Verifique a mensagem de sucesso
  });
});