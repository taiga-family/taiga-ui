import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * stepper.component.ts -> step.component.ts -> stepper.component.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiStepToken extends TuiLightweightToken {}
