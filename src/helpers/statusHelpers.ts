import type { IAnimal } from "../models/IAnimal";

 type status = {
    class: string;
    message: string;
 };
 
 export const statusMessages = (animal: IAnimal): status => {
    const now = Date.now();
    const lastFed = new Date(animal.lastFed).getTime();
    const timeSinceFed = now - lastFed;

    let statusMessage = "";
    let statusClass = "";

    if (timeSinceFed < 60 * 1000) {
      statusMessage = "har nyss ätit";
      statusClass = "not-hungry";
    }

    if (timeSinceFed >= 60 * 1000 && timeSinceFed < 2 * 60 * 1000) {
      statusMessage = "behöver mat snart";
      statusClass = "hungry-soon";
    }

    if (timeSinceFed >= 2 * 60 * 1000) {
      statusMessage = "är hungrig och behöver mat nu";
      statusClass = "hungry";
    }

    return { class: statusClass, message: statusMessage }
  };