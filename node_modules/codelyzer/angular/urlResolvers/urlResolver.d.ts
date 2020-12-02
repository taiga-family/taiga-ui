import * as ts from 'typescript';
import { AbstractResolver, MetadataUrls } from './abstractResolver';
import { PathResolver } from './pathResolver';
export declare class UrlResolver extends AbstractResolver {
    private pathResolver;
    constructor(pathResolver: PathResolver);
    resolve(d: ts.Decorator): MetadataUrls;
    private getProgramFilePath;
}
