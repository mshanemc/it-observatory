interface Header {
    title: string;
    subhead?: string;
    logoUrl?: string;
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
