

Feature('Cadastro');

//const { cadastro_page } = inject()
const FIELD_NUM_CELULAR = '~insira o numero de celular'
const BTN_AVANÇAR_CELULAR ='~Botao Avancar'
const FIELD_NUM_NOME = '~Insira o nome completo'
const BTN_AVANÇAR_NOME = '~Botao Avancar'
const CLICK_BTN_LOCALIZACAO = '~LOCALIZAÇÃO AUTOMÁTICA'
const BTN_CLICAR_SIM = '~Sim'

Scenario('test configuration', ({ I}) => {

//cadastro_page.docadastro('(21)999999999', 'Teste Teste')

 //Entrar no APP de clima e clicar no botão "Cadastrar"
I.see('Explore climas locais socialmente, com o Sowe');//Faltando a vírgula depois da palavra locais
I.see('Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.');
I.click('//android.view.ViewGroup[@content-desc="Cadastrar"]');
    

//Preencher o campo "Celular" apenas com o número de telefone celular (Valor númerico)
I.see('Celular');
I.see('Você receberá um código de confirmação no número de telefone celular informado')
I.seeElement('//android.widget.EditText[@content-desc="insira o numero de celular"]');
I.fillField(FIELD_NUM_CELULAR, '21999999999');
I.wait(3);

//Clicar no botão > para validação do número celular
I.click(BTN_AVANÇAR_CELULAR);

//Preencher o campo Nome Completo
I.waitForElement('~Insira o nome completo', 5);
I.see('Nome Completo')
I.fillField(FIELD_NUM_NOME, 'Teste Teste');
I.wait(1);

//Clicar no botão > para validação de Nome Completo
I.click(BTN_AVANÇAR_NOME);

//Clicar no botão "Localização Automática"
I.waitForElement('~LOCALIZAÇÃO AUTOMÁTICA', 5)
I.see('Localização');
I.see('Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.');
I.click(CLICK_BTN_LOCALIZACAO)

//Clicar no botão "Sim" para localizar o local onde resida
I.see('Compartilhar a localização');
I.see('Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.');
I.click(BTN_CLICAR_SIM);

//validar os dados climáticos acordados de acordo com a região onde reside
I.see('Sowe');
I.see('Sorocaba, SP');
I.seeElement('//android.widget.TextView[@content-desc="Temperatura atual 28˚"]');
I.seeElement('//android.view.ViewGroup[@content-desc="0% CHANCE CH."]');
    
});
