const fs = require('fs')

const { BCMS_ORG_ID, BCMS_INSTANCE_ID, BCMS_API_KEY_ID, BCMS_API_KEY_SECRET } = process.env

if (!BCMS_ORG_ID || !BCMS_INSTANCE_ID || !BCMS_API_KEY_ID || !BCMS_API_KEY_SECRET) {
    console.error("One or more required environment variables are missing.")
    process.exit(1)
}

const config = `module.exports = {
    client: {
        orgId: "${BCMS_ORG_ID}",
        instanceId: "${BCMS_INSTANCE_ID}",
        apiKey: {
            id: "${BCMS_API_KEY_ID}",
            secret: "${BCMS_API_KEY_SECRET}",
        },
    },
};`

fs.writeFileSync('bcms.config.cjs', config)
console.log("bcms.config.cjs file has been generated successfully.")