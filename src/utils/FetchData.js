async function FetchData(url, number) {

const data = [];
try {
  for (let i = 0; i < number; i++) {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result.meals);
    data.push(result.meals);
  }
} catch (error) {
	console.error(error);
}

return data;
}

export default FetchData;
