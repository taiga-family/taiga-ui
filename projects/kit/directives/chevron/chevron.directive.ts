import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    effect,
    inject,
    InjectionToken,
    input,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiDropdownDirective} from '@taiga-ui/core/portals/dropdown';
import {TUI_ICON_END} from '@taiga-ui/core/tokens';

export const TUI_CHEVRON = new InjectionToken(ngDevMode ? 'TUI_CHEVRON' : '', {
    factory: () => '@tui.chevron-down',
});

@Component({
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './chevron.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: `tui-chevron-${TUI_VERSION}`,
})
class Styles {}

@Directive({
    selector: '[tuiChevron]',
    providers: [tuiProvide(TUI_ICON_END, TUI_CHEVRON)],
    host: {
        tuiChevron: '',
        '(change.capture)': 'onNativeSelect($event, false)',
        '(focusout.capture)': 'onNativeSelect($event, false)',
        '(keydown.escape.capture)': 'onNativeSelect($event, false)',
        '(mousedown.capture)': 'onNativeSelect($event, true)',
        '(pointerdown.capture)': 'onNativeSelect($event, true)',
        '(touchstart.capture)': 'onNativeSelect($event, true)',
    },
})
export class TuiChevron {
    private readonly el = tuiInjectElement();
    private readonly open = signal(false);
    private readonly dropdown = inject(TuiDropdownDirective, {optional: true});

    protected readonly nothing = tuiWithStyles(Styles);

    protected readonly toggle = effect(() =>
        this.el.classList.toggle(
            '_chevron-rotated',
            this.open() ||
                this.rotated() ||
                (this.rotated() === '' && !!this.dropdown?.ref()),
        ),
    );

    public readonly rotated = input<boolean | ''>('', {alias: 'tuiChevron'});

    protected onNativeSelect(event: Event, open: boolean): void {
        if (
            event.target instanceof Element &&
            !!event.target.closest('select[tuiSelect]')
        ) {
            this.open.set(open);
        }
    }
}
