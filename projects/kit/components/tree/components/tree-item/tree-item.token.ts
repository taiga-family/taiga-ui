import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * tree-item.providers.ts -> tree-item.component.ts -> tree-item.providers.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiTreeItemToken extends TuiLightweightToken {}
