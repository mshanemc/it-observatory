interface Header {
    title: string;
    subhead?: string;
}

interface Deployable {
    name: string;
    shortname: string;
    description: string;
    docsURL?: string;
    internalDocsURL?: string;
    launchURL?: string;
}

export { Header, Deployable };
