import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_APPEARANCE_OPTIONS,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/message.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-message',
    },
})
class TuiMessageStyles {}

@Directive({
    standalone: true,
    selector: '[tuiMessage]',
    providers: [
        {
            provide: TUI_APPEARANCE_OPTIONS,
            useValue: {appearance: 'neutral'},
        },
    ],
    hostDirectives: [TuiWithAppearance],
})
export class TuiMessage {
    protected readonly nothing = tuiWithStyles(TuiMessageStyles);
}
