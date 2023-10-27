import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiDirectiveStylesService} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';

@Component({
    template: '',
    styleUrls: ['./card.styles.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-card',
    },
})
export class TuiCardComponent {}

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
