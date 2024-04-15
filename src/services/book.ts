import { api } from "./api";

export async function GetAllBook() {
  try {
    const response = await api.get('/livros');
    console.log("O que API retornou: ", response.data);
    return(response.data);
  } catch (error) {
    console.log("erro no service book" + error);
  }
}