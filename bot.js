const discord = require("discord.js");
const cliente = new discord.Client();

const config = require("./config/config.json");
const twjson = require("./tweets.json");


//console.log(twjson.contenido[i].mensaje)

cliente.login(config.DISCORD_BOT.TOKEN);

cliente.on('ready', ()=>{
    console.log(`${cliente.user.tag} has log in.`)
});

const comandValido = (message, cmdName) => message.content.toLowerCase().startsWith(config.DISCORD_BOT.PREFIJO + cmdName)
const dado = () => Math.floor(Math.random()*6) + 1
cliente.on('message', function(message){
    if (message.author.bot) return;
    
    else if (comandValido(message, "contame")) {
        message.reply("Ni en pedo!!!")
    }
    else if (comandValido(message, "dado")) {
        message.reply("Salio un "+dado()+" chuniii 😚")
    }
    else if (comandValido(message, "selfie")) {
        message.reply("En el laburo me dijeron que mi foto de perfil en WhatsApp era demasiado ✨provocativa✨ así que la dejaré acá para sentirme less ashamed more proud", {files: ["./imgs/uno.jpg"]})
    }
    else if (comandValido(message, "anuncio")) { //---------------MANDAR MENSAJES A UN CANAL EN ESPECIFICO POR ID
        let anuncio = message.content.substring(9);

        let canalAnuncio = cliente.channels.cache.get("736777215752142900")

        if(canalAnuncio){
            canalAnuncio.send(anuncio)
        }
    }
    else if (comandValido(message, "anuncio2")) { //---------------MANDAR MENSAJES A UN CANAL EN ESPECIFICO POR NOMBRE
        let anuncio = message.content.substring(10);

        let canalPrueba = cliente.channels.cache.find(channel => channel.name.toLowerCase() === "prueba")

        if(canalPrueba){
            canalPrueba.send(anuncio)
        }
    }else if (comandValido(message, "bj")) {
        message.reply(message.author)
        console.log(message.author)
    }

})



//BIENVENIDA CON FALLA
cliente.on('guildMemberAdd', ()=>{
    console.log(`Ayyy, holaaaa ${cliente.user.tag} !!! Como andamos bebeto <33`)
});

//HOLA JULI
cliente.on('message', function(message){
    console.log(message.author.tag);
    if (message.content === 'Hola Juli') {
        console.log(message.content);
        message.reply('Holisss✨✨✨✨');
    }
});

//CHAU JULI
cliente.on('message', function(message){
    if (message.content === 'Chau Juli') {
        message.reply('Chau :v');
    }
});

//NO ME LA CUENTES
cliente.on('message', function(message){
    if (message.content === 'No me la cuentes Juli') {
        message.reply('Ok, no hay que hacerse la peli a veces...');
    }
});

//CONTAME JULI
cliente.on('message', function(message){
    if (message.content === 'Contame Juli') {
        var random = numRand();
        message.reply(twjson.contenido[random].mensaje);
    }
});

//CONTAME JULI
cliente.on('message', function(message){
    if (message.content.includes('-play')) {
        message.reply('Ese es un temuco amor pero no lo tengo 🙁🙁');
    }
});

function numRand(){
    var random;
    do {
        random =  Math.floor(Math.random()*100);
    } while (random>=59 || random<=-1);
    return random;
}

function blackjack(){

}

