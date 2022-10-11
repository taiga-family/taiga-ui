import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * sort-by.directive.ts -> sortable.directive.ts -> sort-by.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiSortableToken extends TuiLightweightToken {}
