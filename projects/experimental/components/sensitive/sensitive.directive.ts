import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';

import {TuiSensitiveComponent} from './sensitive.component';

@Directive({
    selector: '[tuiSensitive]',
    host: {
        '[style.--t-offset]': 'offset',
        '[class.tui-sensitive]': 'tuiSensitive',
    },
})
export class TuiSensitiveDirective {
    @Input()
    tuiSensitive: boolean | null = false;

    readonly offset = `${Math.round(Math.random() * 10) * 10}px`;

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiSensitiveComponent);
    }
}
