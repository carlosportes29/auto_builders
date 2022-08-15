# auto_builders

**Ferramenta de Automação de Testes Mobile**
- Appium
- Android (Android 9.0 Pie(2018))
- Codecept.js *Javascript
- Report - Mochawesome (output)
- Cucumber
- Node.js

**Configuração de ambiente Java x Appium x Android no Windows**

ANDROID_HOME = C:\Users\c.albuquerque.portes\AppData\Local\Android\Sdk
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_311
Path = C:\Users\c.albuquerque.portes\AppData\Local\Android\Sdk\platform-tools
Path = C:\Users\c.albuquerque.portes\AppData\Local\Android\Sdk\tools
Path = C:\Program Files\Java\jdk1.8.0_311\bin

**Versoes de aplicações utilizadas no teste de automação**

- java version "1.8.0_341"

- node version v14.18.0

- "codeceptjs": "3.3.4"

- "mochawesome": "7.1.3"

- "webdriverio": "7.20.9"

- "mocha": "10.0.0"

**Scripts de testes**

- auto_builders/features/cadastro.feature
- auto_builders/step_definitions/steps.js
- auto_builders/steps/cadastro_test.js

**Comando para execução Cucumber + Report -> npx codeceptjs run --reporter mochawesome (configurado no Package.json)**

**Relatório de pós execução**

- auto_builders/output/mochawesome.html
- auto_builders/output/mochawesome.json
