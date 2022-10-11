import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * line-chart-hint.directive.ts -> line-chart.component.ts -> line-chart-hint.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiLineChartToken extends TuiLightweightToken {}
