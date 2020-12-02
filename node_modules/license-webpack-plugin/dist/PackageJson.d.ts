interface PackageJson {
    name: string;
    license?: string | {
        type: string;
        url: string;
    };
    licenses?: {
        type: string;
        url: string;
    }[];
    version: string;
}
export { PackageJson };
