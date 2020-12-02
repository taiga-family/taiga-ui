import * as ts from 'typescript';
import { Maybe } from '../util/function';
import { FileResolver } from './fileResolver/fileResolver';
import { AnimationMetadata, ComponentMetadata, DirectiveMetadata, InjectableMetadata, ModuleMetadata, PipeMetadata, StyleMetadata, TemplateMetadata } from './metadata';
import { AbstractResolver, MetadataUrls } from './urlResolvers/abstractResolver';
export declare class MetadataReader {
    private readonly fileResolver;
    private readonly urlResolver?;
    constructor(fileResolver: FileResolver, urlResolver?: AbstractResolver);
    read(d: ts.ClassDeclaration): DirectiveMetadata | ComponentMetadata | PipeMetadata | ModuleMetadata | InjectableMetadata | undefined;
    protected readDirectiveMetadata(d: ts.ClassDeclaration, dec: ts.Decorator): DirectiveMetadata;
    protected readPipeMetadata(d: ts.ClassDeclaration, dec: ts.Decorator): DirectiveMetadata;
    protected readModuleMetadata(d: ts.ClassDeclaration, dec: ts.Decorator): DirectiveMetadata;
    protected readInjectableMetadata(d: ts.ClassDeclaration, dec: ts.Decorator): DirectiveMetadata;
    protected readComponentMetadata(d: ts.ClassDeclaration, dec: ts.Decorator): ComponentMetadata;
    protected getDecoratorArgument(decorator: ts.Decorator): Maybe<ts.ObjectLiteralExpression | undefined>;
    protected readComponentAnimationsMetadata(dec: ts.Decorator): Maybe<(AnimationMetadata | undefined)[] | undefined>;
    protected readComponentTemplateMetadata(dec: ts.Decorator, external: MetadataUrls): Maybe<TemplateMetadata | undefined>;
    protected readComponentStylesMetadata(dec: ts.Decorator, external: MetadataUrls): Maybe<(StyleMetadata | undefined)[] | undefined>;
    private _resolve;
}
