import { client } from "./server";

import EconomiaController from "./app/controllers/EconomiaController";
import PassagemController from "./app/controllers/PassagemController";
import CompanyController from "./app/controllers/CompanyController";
import ParcialController from "./app/controllers/ParcialController";


client.on("message", async (message: any) => {
  switch (message.body) {
    /** Exclusive command for 76Telecom company */
    case "!turno":
      await PassagemController(message);
      break;

      //http://localhost:3050/download/reportjornadatrabalho?funcionario_id=128&data_inicial=2020-08-01&data_final=2020-08-31
    case "!company":
      await CompanyController(message);
      break;

    case "/ws2":
      await EconomiaController(message);
      break;

      case "/ws":
        await ParcialController(message);
        break;
  }

  
});
