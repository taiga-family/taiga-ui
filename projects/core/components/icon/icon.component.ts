import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiIcons} from '@taiga-ui/core/directives/icons';

@Component({
    // :not([tuiBadge]) is required to avoid double matching of TuiIcons
    selector: 'tui-icon:not([tuiBadge])',
    template: '',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import '@taiga-ui/styles/components/icon.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {
            directive: TuiIcons,
            inputs: ['iconStart: icon', 'iconEnd: badge'],
        },
    ],
    host: {'[style.--t-icon-bg]': 'mask()'},
})
export class TuiIcon {
    protected readonly icons = inject(TuiIcons);
    protected readonly mask = computed(() => this.icons.resolve(this.background()));
    public readonly background = input('');
}
