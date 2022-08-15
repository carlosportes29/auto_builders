const { I } = inject();
// Add in your custom step files

Given('entro no APP de clima e clicar no botão Cadastrar', () => {
I.see('Explore climas locais socialmente, com o Sowe');//Faltando a vírgula depois da palavra locais
I.see('Saiba quantas pessoas próximas a você reportaram chuva e receba um aviso antes de sair de casa.');
I.click('//android.view.ViewGroup[@content-desc="Cadastrar"]');
});

When('preencho o campo Celular apenas com o número de telefone celular - Valor númerico', () => {
I.see('Celular');
I.see('Você receberá um código de confirmação no número de telefone celular informado')
I.seeElement('//android.widget.EditText[@content-desc="insira o numero de celular"]');
I.fillField('~insira o numero de celular', '21999999999');
});

When('clico no botão > para validação do número celular', () => {
I.click('~Botao Avancar');
});

Then('preencho o campo Nome Completo', () => {
I.waitForElement('~Insira o nome completo', 5);
I.see('Nome Completo')
I.fillField('~Insira o nome completo', 'Teste Teste');
});

Then('clico no botão > para validação do número celular', () => {
I.click('~Botao Avancar');
});

Then('clico no botão Localização Automática', () => {
I.waitForElement('~LOCALIZAÇÃO AUTOMÁTICA', 5)
I.see('Localização');
I.see('Para entregarmos informações mais precisas sobre o seu micro-clima, precisamos utilizar a sua localização automática.');
I.click('~LOCALIZAÇÃO AUTOMÁTICA')
});

Then('clico no botão Sim para localizar o local onde reside', () => {
I.see('Compartilhar a localização');
I.see('Blablabla, enquanto usa o app. Lorem ipsum dolor sit amet.');
I.click('~Sim');
});

Then('valido os dados climáticos acordados de acordo com a região onde reside', () => {
I.see('Sowe');
I.see('Sorocaba, SP');
I.seeElement('//android.widget.TextView[@content-desc="Temperatura atual 28˚"]');
I.seeElement('//android.view.ViewGroup[@content-desc="0% CHANCE CH."]');
});