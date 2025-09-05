const { execSync } = require('child_process');
const getImportMaps = require('../../scripts/utils/getImportMap');

const start = async (options, context) => {
  console.log({ context })
  const imports = await getImportMaps(context)
  console.log({ imports })
}

module.exports = start;

/*
curl 'https://dev.azure.com/Edenred-TicketBenefits/_apis/Contribution/HierarchyQuery/project/ec223901-bc63-4fea-aecf-c6dd2a7c8bd2' \
  -H 'accept: application/json;api-version=5.0-preview.1;excludeUrls=true;enumsAsNumbers=true;msDateFormat=true;noArrayWrap=true' \
  -H 'authorization: Bearer eyJ...
  --data-raw '{"contributionIds":["ms.vss-build-web.runs-data-provider"],"dataProviderContext":{"properties":{"definitionId":"1419","sourcePage":{"url":"https://dev.azure.com/Edenred-TicketBenefits/Ticket/_build?definitionId=1419&view=runs","routeId":"ms.vss-build-web.pipeline-details-route","routeValues":{"project":"Ticket","viewname":"details","controller":"ContributedPage","action":"Execute","serviceHost":"0a762809-be8d-40e4-a1f1-69fb65155c9c (Edenred-TicketBenefits)"}}}}}'

--data-raw #bautify
{
  "contributionIds": [
    "ms.vss-build-web.runs-data-provider"
  ],
  "dataProviderContext": {
    "properties": {
      "definitionId": "1419",
      "sourcePage": {
        "url": "https://dev.azure.com/Edenred-TicketBenefits/Ticket/_build?definitionId=1419&view=runs",
        "routeId": "ms.vss-build-web.pipeline-details-route",
        "routeValues": {
          "project": "Ticket",
          "viewname": "details",
          "controller": "ContributedPage",
          "action": "Execute",
          "serviceHost": "0a762809-be8d-40e4-a1f1-69fb65155c9c (Edenred-TicketBenefits)"
        }
      }
    }
  }
}
*/
