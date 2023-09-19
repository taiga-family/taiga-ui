import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_PLATFORM, TuiDirectiveStylesService, TuiPlatform} from '@taiga-ui/cdk';
import {
    MODE_PROVIDER,
    TUI_MODE,
    TuiAppearance,
    TuiBrightness,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';

@Component({
    template: '',
    styleUrls: ['./button.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
})
export class TuiButtonStylesComponent {}

@Directive({
    selector: 'a[tuiButton],button[tuiButton],a[tuiIconButton],button[tuiIconButton]',
    providers: [MODE_PROVIDER],
    host: {
        tuiButtonNew: '',
        tuiWrapper: '',
        '[attr.data-size]': 'size',
        '[attr.data-appearance]': 'appearance',
        '[attr.data-platform]': 'platform',
        '($.data-mode.attr)': 'mode$',
    },
})
export class TuiButtonDirective {
    @Input()
    size: TuiSizeL | TuiSizeXS = 'l';

    @Input()
    appearance: string | keyof Record<TuiAppearance, string> = 'primary';

    constructor(
        @Inject(TUI_PLATFORM) readonly platform: TuiPlatform,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiButtonStylesComponent);
    }
}
