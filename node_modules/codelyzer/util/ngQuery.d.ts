import * as ts from 'typescript';
import { Maybe } from './function';
export declare function getAnimations(dec: ts.Decorator): Maybe<ts.ArrayLiteralExpression | undefined>;
export declare function getInlineStyle(dec: ts.Decorator): Maybe<ts.ArrayLiteralExpression | undefined>;
export declare function getTemplate(dec: ts.Decorator): Maybe<ts.StringLiteral | undefined>;
export declare function getTemplateUrl(dec: ts.Decorator): Maybe<ts.StringLiteral | undefined>;
