const Discord = require ('discord.js');
const client = new Discord.Client();
var schedule = require('node-schedule');
var rule = new schedule.RecurrenceRule();
rule.minute = 05;


client.on("message", function(message){
    let generalChannel = client.channels.get("496173860983668746")
    generalChannel.send("Vamo rola!");
    schedule.scheduleJob(rule, function(){
        var contador = 1;
        if(contador = 1 || contador < 10){
            for(contador = 1;contador <= 10;contador++){
               setTimeout(function(){
                generalChannel.send("$m");
                contador++
               })
                
            }
        }
        if(contador == 10){
            for(contador = 10;contador <= 13;contador++){
                setTimeout(function(){
                 generalChannel.send("$mg");
                 contador++
                })
                 
             }

        }

        });
        

        

});


client.login('');