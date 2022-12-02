const getRecipes = async (category: string) => {
  const baseUrl = `${process.env.REACT_APP_URL}recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=4&tags=${category}&sort=popularity`;
  const response = await fetch(baseUrl);
  const data = await response.json();
  console.log(data);

  return data.recipes;
};

export default getRecipes;
