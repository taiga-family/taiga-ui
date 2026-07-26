import {
    ChangeDetectionStrategy,
    Component,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {tuiTextfieldOptionsProvider} from '@taiga-ui/core/components/textfield';
import {tuiBlockOptionsProvider} from '@taiga-ui/kit/components/block';
import {tuiSwitchOptionsProvider} from '@taiga-ui/kit/components/switch';

@Component({
    selector: 'search[tuiSearch]',
    template: '<ng-content/>',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './search.styles.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiButtonOptionsProvider({size: 'm'}),
        tuiBlockOptionsProvider({size: 's'}),
        tuiSwitchOptionsProvider({size: 's'}),
        tuiTextfieldOptionsProvider({size: signal('m')}),
    ],
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiSearchComponent {}
