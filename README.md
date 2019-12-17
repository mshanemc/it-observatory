# org-launcher

## How to start

Start simple by running `yarn watch`. This will start the project with a local development server.

The source files are located in the [`src`](./src) folder. All web components are within the [`src/client/modules`](./src/modules) folder. The folder hierarchy also represents the naming structure of the web components.

## Routes (Pages)

`./src/client/modules/my/app/pageDefs.ts` holds the various "routes".
There's properties to override the default header/subhead/logo and to hide or override the footer content.

You can use either `/something` or `#something` to get there (# is preferred), which should match a property of the `pages` object. The `deployables` array is shortnames from the workhop definitions

## Workshop Definitions (Tiles)

`./src/client/modules/my/app/workshopDefinitions.ts` holds the array of workshops (that might be demos or non-workshop things).

- shortname is required to find it.
- name, description are recommended
- if LaunchURL is present, the Create Org button shows up
- if docsURL is present, the Open Guide button shows up
- if internalDocsURL is present, and the route includes `internal` then the Open Guide buttons will link to that internalDocsURL instead of the docsURL
