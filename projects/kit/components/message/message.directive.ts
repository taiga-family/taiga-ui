import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAppearanceOptionsProvider,
    TuiWithAppearance,
} from '@taiga-ui/core/directives/appearance';
import type {TuiSizeXXS} from '@taiga-ui/core/types';

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
    host: {'[attr.data-size]': 'size'},
})
export class TuiMessage {
    private readonly options = inject(TUI_MESSAGE_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiMessageStyles);

    @Input()
    public size: TuiSizeXXS = this.options.size;
}
