
const getData = async (name) => {
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.status == 200){
        console.log(response.data.name);{
            console.log(response.data.sprites.front_default)
        }
        return response.data
    }
    return 'API call broken'
}

const nameform = document.getElementById('nameForm');
nameform.addEventListener('submit', async (event) => {
  event.preventDefault();
  const pname = document.getElementById('pokename').value;
  const pokemonData = await getData(pname);
  console.log(pokemonData);
  loadData(pokemonData);
});

let loadData = async (data) => {
  console.log(data);
  let new_row = `<tr><td scope='row'>${data.name}</td></tr>`;
  let new_prow = `<tr><td><img src="${data.sprites.front_default}"></td></tr>`;
  document.getElementById('Pokemon').insertAdjacentHTML('afterbegin', new_row);
  document.getElementById('sprite').insertAdjacentHTML('afterbegin', new_prow);
};

