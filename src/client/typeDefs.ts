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

interface Footer {
    title: string;
    body1: string;
    body2?: string;
    buttonLabel?: string;
    buttonVariant?: string;
    buttonUrl: string;
}

interface PageDef {
    deployables: Deployable['shortname'][];
    header?: Header;
    footer?: Footer;
    useInternal?: boolean;
    path?: string;
}

export { Header, Deployable, PageDef, Footer };
