import {Directive, Inject, Input} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';

import {TuiCardComponent} from './card.component';

@Directive({
    selector: '[tuiCard]',
    host: {
        tuiCard: '',
        '[attr.data-size]': 'size || "m"',
    },
})
export class TuiCardDirective {
    @Input('tuiCard')
    size: TuiSizeL | '' = 'm';

    constructor(
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiCardComponent);
    }
}
