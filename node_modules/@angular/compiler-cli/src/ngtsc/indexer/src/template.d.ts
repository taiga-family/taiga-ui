/// <amd-module name="@angular/compiler-cli/src/ngtsc/indexer/src/template" />
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { BoundTarget } from '@angular/compiler';
import { TopLevelIdentifier } from './api';
import { ComponentMeta } from './context';
/**
 * Traverses a template AST and builds identifiers discovered in it.
 *
 * @param boundTemplate bound template target, which can be used for querying expression targets.
 * @return identifiers in template
 */
export declare function getTemplateIdentifiers(boundTemplate: BoundTarget<ComponentMeta>): Set<TopLevelIdentifier>;
