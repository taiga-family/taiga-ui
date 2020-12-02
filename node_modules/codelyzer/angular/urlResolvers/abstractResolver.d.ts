import { Decorator } from 'typescript';
export interface MetadataUrls {
    readonly styleUrls: string[];
    readonly templateUrl: string;
}
export declare abstract class AbstractResolver {
    abstract resolve(decorator: Decorator): MetadataUrls | null;
    protected getTemplateUrl(decorator: Decorator): MetadataUrls['templateUrl'] | undefined;
    protected getStyleUrls(decorator: Decorator): MetadataUrls['styleUrls'];
}
