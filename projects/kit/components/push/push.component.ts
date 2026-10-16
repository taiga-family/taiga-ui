import {DatePipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    inject,
    input,
    output,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiIcon} from '@taiga-ui/core/components/icon';
import {TuiButtonX} from '@taiga-ui/core/directives/button-x';
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';

@Component({
    selector: 'tui-push',
    imports: [DatePipe, TuiButton, TuiButtonX],
    templateUrl: './push.template.html',
    styleUrl: './push.style.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({size: 's', appearance: 'secondary'})],
    host: {'[style.--t-lines]': 'lines()'},
})
export class TuiPushComponent {
    protected readonly isString = tuiIsString;
    protected readonly closeWord = inject(TUI_CLOSE_WORD);
    protected readonly icon = contentChild(TuiIcon);

    public readonly heading = input('');
    public readonly type = input('');
    public readonly lines = input(2);
    public readonly timestamp = input<number | string>('');
    public readonly close = output();
}
