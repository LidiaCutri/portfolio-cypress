# cypress

Link Cypress Page https://www.cypress.io/

Open Cypress ./node_modules/.bin/cypress open ou npx cypress open

Command Line run npm run cy:run -- --spec "cypress/integration/test.spec.js"

Outros comandos: npx cypress open = abre o Cypress

./node_modules/.bin/cypress open = abre o Cypress

adicionar ao topo dos testes = ///  aciona o intelisense e traz recursos como referência a documentação do comando quando deixamos o mouse em cima dele (somente no VSCODE)

it.only = executa um teste só

it.skip = não executa o teste selecionado

rodar testes = npx cypress run --spec "cypress/integration/salesforce/servicos/contas/create_new_account.spec.js"

instalar xpath = npm install -D cypress-xpath (Depois incluir require('cypress-xpath') no support/index.js)

instalar cypress com cucumber = npm install --save-dev cypress cypress-cucumber-preprocessor depois colocar o script abaixo na pasta cypress/plugins/index.js:

const cucumber = require('cypress-cucumber-preprocessor').default module.exports = (on, config) => { on('file:preprocessor', cucumber()) }

pageObjects e steps ficam em pastas dentro da pasta support, as features ficam dentro da pasta integration

incluir no package.json a pasta aonde ficarão as steps:

"cypress-cucumber-preprocessor": { "step_definitions": "cypress/support/steps" }