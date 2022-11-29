It's a test monorepo based on Nx (https://nx.dev/).
Project includes following workspaces:

- packages - platform things (utils, components and so on)
- vendors - code not specific for platform. But at the same time platform code is available inside of vendors, you can just import it as from usual library.
- apps - main apps such as FE projects or BE services. From apps both packages and vendors code is available.

Project uses basic Nx commands:

- npx nx build [workspace-name] (npx nx build payments-frontend)
- npx nx serve payments-frontend
- in bigger projects other commands can be supported (testing, linting and so on)

To check how it works on your computer:

- clove repo
- run `npm install` (it's important to have npm version higher that v7)
- run `npx nx serve` or `npx nx serve payments-frontend`
