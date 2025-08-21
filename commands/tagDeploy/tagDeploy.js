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
  -H 'authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkpZaEFjVFBNWl9MWDZEQmxPV1E3SG4wTmVYRSIsImtpZCI6IkpZaEFjVFBNWl9MWDZEQmxPV1E3SG4wTmVYRSJ9.eyJhdWQiOiI0OTliODRhYy0xMzIxLTQyN2YtYWExNy0yNjdjYTY5NzU3OTgiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC80YzFkOWUwZi01YzI3LTQyMjgtYTM1YS1kZTdiNDA4M2ZmN2IvIiwiaWF0IjoxNzU1NjEzODg4LCJuYmYiOjE3NTU2MTM4ODgsImV4cCI6MTc1NTYxOTMwMCwiYWNyIjoiMSIsImFpbyI6IkFXUUFtLzhaQUFBQXZjemFNV2JTYk9WV2tHRkRvc0hQbDZBeGVvMUxSS1dkVWpqQXF5R2NqSDhoSVl3dG1WS0ZmTnB4VVFxQ3dkckdvd251ZDRXcGs4UVIwMTRVampBYk02M09ZRGJXd1l1SStZY1ZDWFVzMk8xWDFqVzNER1RYQ0VuNC9EM3ZKRytOIiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBpZCI6IjQ5OWI4NGFjLTEzMjEtNDI3Zi1hYTE3LTI2N2NhNjk3NTc5OCIsImFwcGlkYWNyIjoiMCIsImF1dGhfdGltZSI6MTc1NTYwOTAwOCwiZmFtaWx5X25hbWUiOiJNYWxhZ3Jpbm8gU29hcmVzIiwiZ2l2ZW5fbmFtZSI6IkdpYW5wYXVsbyIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjE5MS4xOS4xNjUuMTYxIiwibmFtZSI6IlNPQVJFUyBHaWFucGF1bG8gTWFsYWdyaW5vIChDb25zdWx0aW5nIEZvciBFZGVucmVkKSIsIm9pZCI6Ijc2YWUzMTMyLTFkMGUtNDhiZC1hMTg4LTI2MzI0YzQzNjU4NSIsIm9ucHJlbV9zaWQiOiJTLTEtNS0yMS0xNjQwOTQ2OTI2LTE1Mzk0MDM5MzMtMzQ0NzcxMTc2NC0yNjQxNjkiLCJwdWlkIjoiMTAwMzIwMDQ5MjQwOTM2MiIsInJoIjoiMS5BWUlBRDU0ZFRDZGNLRUtqV3Q1N1FJUF9lNnlFbTBraEUzOUNxaGNtZkthWFY1aUNBSzJDQUEuIiwic2NwIjoiQ3Jvc3NUZW5hbnRJbmZvcm1hdGlvbi5SZWFkQmFzaWMuQWxsIFVzZXIuSW52aXRlLkFsbCBVc2VyLlJlYWQgdXNlcl9pbXBlcnNvbmF0aW9uIiwic2lkIjoiMDA3YWRkMzktYTVjOS00NDdjLTI2NmEtNmJmYWFjY2UyNThjIiwic3ViIjoiUXZhY3g1QWgxamhpMFR5NmFrdlF6MXR5QkdMcnpPNThSUGJJczlkRUpQNCIsInRpZCI6IjRjMWQ5ZTBmLTVjMjctNDIyOC1hMzVhLWRlN2I0MDgzZmY3YiIsInVuaXF1ZV9uYW1lIjoiZ2lhbnBhdWxvLnNvYXJlc0Bjb25zdWx0aW5nLWZvci5lZGVucmVkLmNvbSIsInVwbiI6ImdpYW5wYXVsby5zb2FyZXNAY29uc3VsdGluZy1mb3IuZWRlbnJlZC5jb20iLCJ1dGkiOiJ6R1o5Y2NQTDFrcUh2cnBkRUptcEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX2Z0ZCI6Im1QRF9PLXlpVmhqQ2toUlZ1MDloSEk0YVAtNlNvaGliS2lmYThnNUFOOUVCWlhWeWIzQmxkMlZ6ZEMxa2MyMXoiLCJ4bXNfaWRyZWwiOiIyMCAxIn0.gCmhOzRDH3zzgyLWXfs6NDVTHZWAWgl-Qab3kr5dgFoV148CCk2wxW8T3sIQb0IouJoSLtVTPzQbWeP5vRwcREjweoiB8UPkB1r4OK49YXJ54We5mMpXaWCTR7VBwlNwk82ZbxBuz8sUZoZ8udpi-XwG2CUFtZJPMI3HD8dhFyIL0RIEQlc8ql2S2Qo_M_rtciqceDaujgapWmFe6P0sr7D75_DE_LIxP3138AX-eUr0fLiJO7S5Jv-Bi0R8QZgknDIzjLJfJGbb6v1jyT-6EjY4v1rKSlRw5pJfqLItHdH2OMEoPI1bIsgsIgmgTOiz4RIh32SGwn9H7q3_0mRcmQ' \
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
