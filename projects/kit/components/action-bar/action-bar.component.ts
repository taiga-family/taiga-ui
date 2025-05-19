import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {TuiAnimated} from '@taiga-ui/cdk/directives/animated';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiButtonOptions} from '@taiga-ui/core/components/button';
import {TUI_BUTTON_OPTIONS} from '@taiga-ui/core/components/button';
import {TuiExpandComponent} from '@taiga-ui/core/components/expand';
import {tuiLinkOptionsProvider} from '@taiga-ui/core/components/link';
import type {TuiSizeS} from '@taiga-ui/core/types';

@Component({
    standalone: true,
    selector: 'tui-action-bar',
    imports: [TuiExpandComponent],
    templateUrl: './action-bar.template.html',
    styleUrls: ['./action-bar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiProvide(TUI_BUTTON_OPTIONS, TuiActionBarComponent),
        tuiLinkOptionsProvider({appearance: 'action-grayscale', pseudo: true}),
    ],
    hostDirectives: [TuiAnimated],
    host: {
        tuiTheme: 'dark',
        '[attr.data-size]': 'size',
    },
})
export class TuiActionBarComponent implements TuiButtonOptions {
    @Input()
    public expanded = false;

    @Input()
    public size: TuiSizeS = 'm';

    public readonly appearance = 'secondary-grayscale';
}
