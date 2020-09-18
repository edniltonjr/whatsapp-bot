import request from "request";
import moment from 'moment';

interface IEconomia {
  getChat: () => any;
  reply: (args: string) => void;
}

export default async (msg: IEconomia) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  const options: { method: string; url: string } = {
    method: "GET",
    url: "http://177.10.200.16:3050/contagemWS",
  };

  


  const type = (endereco: {
    soma?: string;
    horario?: string;
  }) => {
    return `* Campanha: (${endereco.soma})*`;
  };

  request(options, async (error: any, response: any, body: any) => {
    if (error ?? response.statusCode !== 200)
      return msg.reply("Houve um erro inesperado.");


      const array = JSON.parse(body);

      



    
 
        msg.reply(

        `Total WS1:${array.contagem[0]['count(*)']} \n` 
      
        
     )

     

  

    

  });
};
