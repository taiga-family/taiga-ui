/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BuilderOutput } from '@angular-devkit/architect';
import { Observable } from 'rxjs';
export declare function runModuleAsObservableFork(cwd: string, modulePath: string, exportName: string | undefined, args: any[]): Observable<BuilderOutput>;
