import { test, expect } from "@playwright/test";
import { setBaseUrl } from "../../Utils/setBaseUrl";
import { HttpClient } from "../../Utils/httpClient";
import { PlaceOrderPet } from "../../Api/post-place-order-pet.mappers";
import { order } from "../../variavel-global";

test.describe("Criar um novo pedido", () => {

    const baseUrl = setBaseUrl(); // Obtenha a URL base
    const url = `https://${baseUrl}/v2/store/order`;
    const client = new HttpClient();
    const id = order;
    const petId = 10;
    const quantity = 4;
    const shipDate = new Date().toISOString();
    const status = "sold";
    const complete = true;
   
  test('Deverá criar um novo pedido com sucesso, status 200.', async () => {
   

    // Dados do animal de estimação
    const adicionandoPetDto = PlaceOrderPet(
        id,
        petId,
        quantity,
        shipDate,
        status,
        complete
       );

    // Headers
    const headers = {
      "Content-Type": "application/json",
    };

    console.log("URL:", url);
    console.log("Headers:", headers);
    console.log("Body:", adicionandoPetDto);

    // Faça a requisição POST
    const response = await client.makePost(url, adicionandoPetDto);

    console.log("Response:", response); // Log da resposta completa
    console.log("Response Data:", response.data); // Log da resposta data
    console.log("Response Status:", response.status); // Log da resposta status

    // Verifique a resposta
    expect(response.status).toBe(200); // Verifique o status da resposta
   
    
  });
});