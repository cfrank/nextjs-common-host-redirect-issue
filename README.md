# nextjs-common-host-redirect-issue
Reproduce issue within NextJS where a redirect to a external URL on a common host fails.

https://github.com/cfrank/nextjs-common-host-redirect-issue/assets/2308484/68d2a5ab-5a0e-4690-b613-b023198ec276

## To Reproduce
- Run `docker compose up`
- Visit http://localhost
- Enter a name and submit the form
- Notice that you see a nextjs 404 page.

## Current vs. Expected behavior

**Current:** After #60798 (specifically: https://github.com/vercel/next.js/blob/canary/packages/next/src/server/app-render/action-handler.ts#L258) we are seeing a regression where performing a redirect() within a server component to a absolute url on the same host, but where nextjs is not running, is being routed through NextJS.

**Expected:** We would like a way to perform a absolute URL redirect and specify that it should not be routed through nextjs even if on the same host.

**Context:** We are running NextJS within a large enterprise environment where our host (https://example.com) hosts many hundred services crossing both subdomains, subpaths, etc.

- We have NextJS running on https://example.com/next
- But we have a seperate application running on https://example.com/notnext.
- When performing redirect('https://example.com/notnext); we would like the ability to explicitly specify that it should not be streamed or resolved by the NextJS router.

## Provide environment information

**Relevant Packages:**
- "react": "^18",
- "react-dom": "^18",
- "next": "14.2.0-canary.67"
