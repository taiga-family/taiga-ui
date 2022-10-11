import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * slider.component.ts -> slider-key-steps.component.ts -> slider.component.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiSliderToken extends TuiLightweightToken {}
