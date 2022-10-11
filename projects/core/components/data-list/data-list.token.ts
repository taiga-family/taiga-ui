import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core/lightweight';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * data-list.component.ts -> option.component.ts -> data-list.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiDatalistToken extends TuiLightweightToken {}
