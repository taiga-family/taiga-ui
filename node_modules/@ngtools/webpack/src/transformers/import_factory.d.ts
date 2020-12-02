import * as ts from 'typescript';
/**
 * Given this original source code:
 *
 * import { NgModule } from '@angular/core';
 * import { Routes, RouterModule } from '@angular/router';
 *
 * const routes: Routes = [{
 *   path: 'lazy',
 *   loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule).
 * }];
 *
 * @NgModule({
 *   imports: [RouterModule.forRoot(routes)],
 *   exports: [RouterModule]
 * })
 * export class AppRoutingModule { }
 *
 * NGC (View Engine) will process it into:
 *
 * import { Routes } from '@angular/router';
 * const ɵ0 = () => import('./lazy/lazy.module').then(m => m.LazyModule);
 * const routes: Routes = [{
 *         path: 'lazy',
 *         loadChildren: ɵ0
 *     }];
 * export class AppRoutingModule {
 * }
 * export { ɵ0 };
 *
 * The importFactory transformation will only see the AST after it is process by NGC.
 * You can confirm this with the code below:
 *
 * const res = ts.createPrinter().printNode(ts.EmitHint.Unspecified, sourceFile, sourceFile);
 * console.log(`### Original source: \n${sourceFile.text}\n###`);
 * console.log(`### Current source: \n${currentText}\n###`);
 *
 * At this point it doesn't yet matter what the target (ES5/ES2015/etc) is, so the original
 * constructs, like `class` and arrow functions, still remain.
 *
 */
export declare function importFactory(warningCb: (warning: string) => void, getTypeChecker: () => ts.TypeChecker): ts.TransformerFactory<ts.SourceFile>;
