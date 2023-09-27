import axios from "axios";
import { $host } from ".";

export class Service {
    static async getAccount({ idInstance, apiTokenInstance }) {
        const { data } = await $host.get(`/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
        return data;
    }
    static async getAllChats({ idInstance, apiTokenInstance }) {
        const { data } = await $host.get(`/waInstance${idInstance}/getChats/${apiTokenInstance}`);
        return data;
    }
    static async sendMessage({ idInstance, apiTokenInstance, chatId, message }) {
        const { data } = await $host.post(`/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            chatId, message,
        });
        return data;
    }
    static async getLastMessages({ idInstance, apiTokenInstance, chatId }) {
        const { data } = await $host.post(`/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`, {
            chatId, count: 10,
        });
        return data;
    }
}
