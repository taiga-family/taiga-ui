import * as ts from 'typescript';
import { NgWalker } from '../angular/ngWalker';
import { IOptions } from 'tslint';
import { ComponentMetadata } from '../angular/metadata';
import { F1, Maybe } from '../util/function';
export declare type Walkable = 'NgComponent';
export declare function allNgComponent(): WalkerBuilder<'NgComponent'>;
export declare class Failure {
    node: ts.Node;
    message: string;
    constructor(node: ts.Node, message: string);
}
export interface WalkerBuilder<T extends Walkable> {
    where: (validate: F1<ComponentMetadata, Maybe<Failure>>) => WalkerBuilder<T>;
    build: (sourceFile: ts.SourceFile, options: IOptions) => NgWalker;
}
