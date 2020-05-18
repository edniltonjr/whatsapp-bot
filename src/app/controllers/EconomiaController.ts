import request from "request";

interface IEconomia {
  getChat: () => any;
  reply: (args: string) => void;
}

export default async (msg: IEconomia) => {
  const chat = await msg.getChat();
  chat.sendStateTyping();

  const options: { method: string; url: string } = {
    method: "GET",
    url: "https://cep.awesomeapi.com.br/json/58119000",
  };


  const type = (endereco: {
    cep?: string;
    address_type?: string;
    address_name?: string;
    address?: string;
    district: string;
    state?: string;
    lat?: string;
    lng?: string;
    ddd?: string;
    city?: string;
    city_ibge?: string;
  }) => {
    return `* Endereço: (${endereco.city})*`;
  };

  request(options, async (error: any, response: any, body: any) => {
    if (error ?? response.statusCode !== 200)
      return msg.reply("Houve um erro inesperado.");

    const { city } = JSON.parse(body);

    msg.reply(
      `Cidade: 💎💰🤑💹 \n${city}`
    );
  });
};
