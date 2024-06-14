import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiIsString} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiButton, tuiButtonOptionsProvider} from '@taiga-ui/core/components/button';
import {TuiFormatDatePipe} from '@taiga-ui/core/pipes/format-date';
import {TUI_CLOSE_WORD, TUI_COMMON_ICONS} from '@taiga-ui/core/tokens';

@Component({
    standalone: true,
    selector: 'tui-push',
    imports: [NgIf, AsyncPipe, TuiButton, TuiFormatDatePipe],
    templateUrl: './push.template.html',
    styleUrls: ['./push.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiButtonOptionsProvider({size: 's', appearance: 'secondary'})],
})
export class TuiPush {
    protected readonly isString = tuiIsString;
    protected readonly closeWord$ = inject(TUI_CLOSE_WORD);
    protected readonly icons = inject(TUI_COMMON_ICONS);

    @Input()
    public heading = '';

    @Input()
    public type = '';

    @Input()
    public timestamp: number | string = '';

    @Output()
    public readonly close = new EventEmitter<void>();
}
