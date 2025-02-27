Projeto de Automação com Playwright

Este projeto utiliza o Playwright para automação de testes de API. Abaixo estão as instruções para configurar e executar os testes.

Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js (versão 16 ou superior)

Yarn ou npm (gerenciador de pacotes)

Instalação
Clone o repositório:

git clone https://github.com/seu-usuario/seu-projeto.git
cd TESTESEFPLAYWRIGHT
Instale as dependências:
Se estiver usando Yarn:


npm install -g yarn
yarn add dotenv   
yarn install
npm install --save--dev cross-env
npm install axios
Se estiver usando npm:


npm install
Instale o Playwright:
O Playwright já deve estar incluído nas dependências do projeto, mas caso precise instalá-lo manualmente:
npm init playwright@latest

npx playwright install
Configuração
Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:


DEV_BASE_URL=https://dev.example.com
HOM_BASE_URL=https://hom.example.com
PROD_BASE_URL=https://prod.example.com

Certifique-se de que o arquivo .env está sendo carregado no seu projeto. Para isso, instale o dotenv:


npm install dotenv
E adicione no início do arquivo onde você configura a URL base (setBaseUrl.js):

javascript
require('dotenv').config();
Executando os Testes
Comandos Disponíveis
Rodar testes no ambiente de desenvolvimento (DEV):


npx cross-env Environment=DEV yarn playwright test --ui
Rodar testes no ambiente de homologação (HOM):


npx cross-env Environment=HOM yarn playwright test --ui
Rodar testes no ambiente de produção (PROD):


npx cross-env Environment=PROD yarn playwright test --ui
Rodar testes em modo headless (sem interface gráfica):


npx cross-env Environment=DEV yarn playwright test
Rodar testes em um navegador específico (por exemplo, Chromium):

npx cross-env Environment=DEV yarn playwright test --project=chromium
Gerar relatório de testes:


npx playwright show-report


javascript
const { test, expect } = require('@playwright/test');
const baseUrl = require('./src/setBaseUrl');

test('Exemplo de teste', async ({ page }) => {
  await page.goto(baseUrl);
  await expect(page).toHaveTitle('Example Domain');
  console.log(`Teste rodando na URL: ${baseUrl}`);
});
Contribuição
Faça um fork do projeto.

Crie uma branch para sua feature (git checkout -b feature/nova-feature).

Commit suas mudanças (git commit -m 'Adiciona nova feature').

Push para a branch (git push origin feature/nova-feature).

Abra um Pull Request.

