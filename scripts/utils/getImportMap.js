const axios = require('axios');

const importMapUrl = [
  'https://tsr-customerportal-cdn-portal-p.azureedge.net/customer-portal-mfes/import-map.json',
  'https://tsr-customerportal-cdn-portal-p.azureedge.net/hrportal-backoffice-mfes/import-map.json',
];

const getImportMap = async (context) => {

  const imports = await Promise.all(importMapUrl.map(url => axios.get(url)))
    .then(responses => {
      const imports = responses.reduce((acc, response) => {
        return { ...acc, ...response.data.imports };
      }, {});
      return imports
    })
    .catch(error => {
      throw new Error(`Error fetching import maps: ${error}`);
    })

  return imports
};

module.exports = getImportMap;

