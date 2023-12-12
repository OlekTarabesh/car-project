export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c5594ba2f3msh7cfb714c9efbfdbp1a5fa8jsncfe4e0fe0fb6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}
