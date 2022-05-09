const fs = require("fs");
const FireblocksSDK = require("fireblocks-sdk").FireblocksSDK;

const create = async () => {

};

const submit = async () => {

    const apiKey = process.env.FIREBLOCKS_API_KEY;

    // read private key from file
    const privateKey = await fs.readFile("./privatekey.asc", "utf8");

    const fireblocks = new FireblocksSDK(privateKey, apiKey);

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

    const result = await fireblocks.createTransaction(payload);
};

