# BCMS SaaS Waitlist
Add a **.env**.
```
BCMS_ORG_ID="Your BCMS_ORG_ID here"
BCMS_INSTANCE_ID="Your BCMS_INSTANCE_ID here"
BCMS_API_KEY_ID="Your BCMS_API_KEY_ID here"
BCMS_API_KEY_SECRET="Your BCMS_API_KEY_SECRET here"
```

Export the env vars and generate a **bcms.config.cjs** file.
```
export $(grep -v '^#' .env | xargs)
npm run gen-bcms-config
```

Install dependencies.
```
npm i
```

Run the project.
```
npm run dev
```
