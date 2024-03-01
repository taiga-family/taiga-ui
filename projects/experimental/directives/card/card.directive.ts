import {Directive, Input} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk';

import {TuiCardComponent} from './card.component';

@Directive({
    selector: '[tuiCardMedium]',
    host: {
        tuiCardMedium: '',
    },
})
export class TuiCardMediumDirective {
    protected readonly nothing = tuiWithStyles(TuiCardComponent);
}

@Directive({
    selector: '[tuiCardLarge]',
    host: {
        tuiCardLarge: '',
        '[attr.data-space]': 'space || "normal"',
    },
})
export class TuiCardLargeDirective {
    @Input('tuiCardLarge')
    public space: '' | 'compact' | 'normal' = 'normal';

    protected readonly nothing = tuiWithStyles(TuiCardComponent);
}
