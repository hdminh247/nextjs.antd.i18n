## Dependencies Installation
```bash
npm install
#or
yarn install
```
## Getting Started

- First, run the development server:

```bash
npm run dev
# or
yarn dev
```

- For production build
```bash
# build
yarn build

# start production server
yarn start
```

- For localize automatically, you need to:
```bash
1. Select or create a Cloud Platform project.

2. Enable billing for your project.

3. Enable the Cloud Translation API.

4. Set up authentication with a service account so you can access the API from your local workstation.

5. Pass `project_id` and `api_key` in `scripts/localize.js` then run

yarn localize
```

## Adjustment Places
### 1. Where to add multi-language words
All language files are located at `public/locales`
### 2. Where to add new menu items?
You can check `menuLinks` in `src/constants/links.ts`
### 3. Where to change the URL of HTML5 games, since we also need to add userid & pwd in the URL according to the user login credential
In API, you can return the link by `gameurl` besides `gameid` and `gameicon`

### 4. Help Center (live chat), In future, we will need to implement chatting services, where to change the codes?
You just need to replace the code logic inside each existing functions defined in `src/utils/help-center.ts` 
