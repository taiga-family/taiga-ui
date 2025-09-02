import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM} from '@taiga-ui/cdk/tokens';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components';
import {TuiWithIcons} from '@taiga-ui/core/directives/icons';

@Component({
    standalone: true,
    template: '',
    styles: ['@import "@taiga-ui/kit/styles/components/toast.less";'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-toast',
    },
})
class TuiToastStyles {}

@Directive({
    standalone: true,
    selector: 'a[tuiToast][tuiLink], [tuiToast][tuiButton]',
    providers: [
        {
            provide: TUI_BUTTON_OPTIONS,
            useFactory: () => ({
                ...inject(TUI_BUTTON_OPTIONS, {skipSelf: true}),
                size: 's',
                appearance:
                    inject(TUI_PLATFORM) === 'web' ? 'secondary-grayscale' : 'secondary',
            }),
        },
    ],
})
export class TuiInteractiveToast {
    protected readonly nothing = tuiWithStyles(TuiToastStyles);
}

@Directive({
    standalone: true,
    selector: '[tuiToast]:not(a):not(button)',
    hostDirectives: [TuiWithIcons],
})
export class TuiStaticToast {
    protected readonly nothing = tuiWithStyles(TuiToastStyles);
}

export const TuiToast = [TuiInteractiveToast, TuiStaticToast] as const;
