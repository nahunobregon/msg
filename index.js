const qrcode = require('qrcode-terminal');
const readline = require('readline');
const fs = require('fs')
const { MessageMedia } = require('whatsapp-web.js');
const { Client } = require('whatsapp-web.js');
const client = new Client();
client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
    //console.log(qr);
});
client.on('ready', () => {
    console.log('Client is ready!');
    const readInterface = readline.createInterface({
        input: fs.createReadStream('./numeros.txt'),
    });
    readInterface.on('line', function(line) {
        const number = "+51"+line;
        const chatId = number.substring(1) + "@c.us";
        const media = MessageMedia.fromFilePath('./Molduras-Vialci-Catalogo-acrilico.pdf');
        client.sendMessage(chatId, media);
    });
});
client.initialize();