import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env

export function setBaseUrl() {
    const environment = process.env.ENVIRONMENT || "DEV";
    const baseUrl = process.env[`BASE_URL_${environment.toUpperCase()}`];
    console.log("Base URL:", baseUrl);
    return baseUrl;
  }