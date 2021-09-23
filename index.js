const axios = require('axios').default;
const url = 'https://restcountries.com/v3/all';
axios.get(url)
  .then(res => {
    const data = res.data;
    const lang = new Set();
    data.forEach(str => Object.values(str.languages ?? []).forEach(l => lang.add(l)));
    console.log(`Total Languages: ${lang.size}`)
    const largestTen = data
      .sort((country1, country2)  => country2.area - country1.area).slice(0, 10).map(pop => ({ country: pop.name.common, area: pop.area }));
    console.log(`Largest Countries:`, largestTen);
  });

