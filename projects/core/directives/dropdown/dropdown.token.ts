import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core/lightweight';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * dropdown.directive.ts -> dropdown.component.ts -> dropdown.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiDropdownToken extends TuiLightweightToken {}
