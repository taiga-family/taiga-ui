import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';

@Component({
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/message.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-message'},
})
class Styles {}

@Directive({
    standalone: true,
    selector: '[tuiMessage]',
    providers: [
        provideStyles(Styles),
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'neutral'},
        },
    ],
    hostDirectives: [TuiWithAppearance, TuiWithStyles],
})
export class TuiMessage {}
