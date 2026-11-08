import { CoreClient, caBRAPI } from "../../dist/index.js";

// Node.js
// import { caBRAPI, CoreClient } from '@cabrapi/sdk';

// Browser e Bun
// import { caBRAPI, CoreClient } from 'https://cdn.jsdelivr.net/npm/@cabrapi/sdk/dist/index.js';

const client = new caBRAPI(
  new CoreClient.Options(CoreClient.Mode.PRIVATE)
    .apiKey(process.env.CABRAPI_KEY)
    .baseURL("http://localhost:3000"),
);

export default client;
