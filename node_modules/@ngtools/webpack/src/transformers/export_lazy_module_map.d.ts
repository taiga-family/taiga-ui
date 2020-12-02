import * as ts from 'typescript';
import { LazyRouteMap } from '../lazy_routes';
export declare function exportLazyModuleMap(shouldTransform: (fileName: string) => boolean, lazyRoutesCb: () => LazyRouteMap): ts.TransformerFactory<ts.SourceFile>;
