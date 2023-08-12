import axios from "axios";

export async function fetchCars() {
    const options = {
        method: 'GET',
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        params: {model: 'corolla'},
        headers: {
          'X-RapidAPI-Key': '75912b2460msh9eadd0b495ad8fcp1ecea2jsnb0a8707e2875',
          'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        console.log(response.data);
         return response.data;

    } catch (error) {
        console.error(error);
    }

    return [];
}