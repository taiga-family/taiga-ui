import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';

import {TUI_MESSAGE_OPTIONS} from './message.options';

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
    providers: [tuiAppearanceOptionsProvider(TUI_MESSAGE_OPTIONS)],
    hostDirectives: [TuiWithAppearance],
})
export class TuiMessage {
    protected readonly nothing = tuiWithStyles(TuiMessageStyles);
}
