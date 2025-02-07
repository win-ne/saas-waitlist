import { Client } from "@thebcms/client"

const getBCMSClient = () => {
    const bcmsOrgId = process.env.BCMS_ORG_ID
    const bcmsInstanceId = process.env.BCMS_INSTANCE_ID
    const bcmsApiKeyId = process.env.BCMS_API_KEY_ID
    const bcmsApiKeySecret = process.env.BCMS_API_KEY_SECRET

    if (bcmsOrgId && bcmsInstanceId && bcmsApiKeyId && bcmsApiKeySecret) {
        return new Client(
            bcmsOrgId,
            bcmsInstanceId,
            {
                id: bcmsApiKeyId,
                secret: bcmsApiKeySecret,
            },
            {
                injectSvg: true,
            }
        )
    }

    throw new Error("BCMS orgnization ID, instance ID, API key ID or secret is missing")
}

export const bcms = getBCMSClient()