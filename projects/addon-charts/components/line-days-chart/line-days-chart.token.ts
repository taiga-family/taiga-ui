import {Directive} from '@angular/core';
import {TuiLightweightToken} from '@taiga-ui/core';

/**
 * @internal
 * Such a token prevents circular dependencies between
 * line-days-chart-hint.directive.ts -> line-days-chart.component.ts -> line-days-chart-hint.directive.ts
 *
 * more: https://angular.io/guide/lightweight-injection-tokens
 */
@Directive()
export class TuiLineDaysChartHintToken extends TuiLightweightToken {}
