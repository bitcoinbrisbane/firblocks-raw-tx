const fs = require("fs");
const FireblocksSDK = require("fireblocks-sdk").FireblocksSDK;
const EthersBridge = require("fireblocks-defi-sdk");
const Chain = require("fireblocks-defi-sdk");

const chain = Chain[process.env.ETH_CHAIN || "ROPSTEN"]; 

const getClient = () => {
    const apiKey = process.env.FIREBLOCKS_API_KEY;

    // read private key from file
    const privateKey = await fs.readFile("./privatekey.asc", "utf8");

    const client = new FireblocksSDK(privateKey, apiKey);
    return client;
};

const create = async () => {
    const bridge = new EthersBridge({ 
        fireblocksApiClient,
        vaultAccountId: process.env.FIREBLOCKS_SOURCE_VAULT_ACCOUNT || "0",
        externalWalletId: process.env.FIREBLOCKS_EXTERNAL_WALLET,
        chain
    });
};

const submit = async () => {

    const client = getClient();

    const payload = {
        assetId: "ETH",
        source: {
            type: sourceType,
            id: sourceId || 0
        },
        destination: {
            type: destinationType,
            id: String(destinationId)
        },
        amount: String(amount),
        fee: String(fee),
        note: "Created by fireblocks SDK"
    };

    const result = await client.createTransaction(payload);
};

