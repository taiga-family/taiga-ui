import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/toast.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiWithIcons],
    host: {
        class: 'tui-toast',
    },
})
class TuiToastStyles {}

@Directive({
    standalone: true,
    selector: '[tuiToast]',
    providers: [
        tuiButtonOptionsProvider(() => ({
            size: 's',
            appearance:
                inject(TUI_PLATFORM) === 'web' ? 'secondary-grayscale' : 'secondary',
        })),
    ],
    hostDirectives: [TuiWithIcons],
})
export class TuiToast {
    protected readonly nothing = tuiWithStyles(TuiToastStyles);
}
