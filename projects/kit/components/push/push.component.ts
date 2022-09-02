import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp, TuiInjectionTokenType, tuiIsObserved} from '@taiga-ui/cdk';
import {TUI_CLOSE_WORD} from '@taiga-ui/core';

@Component({
    selector: `tui-push`,
    templateUrl: `./push.template.html`,
    styleUrls: [`./push.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiPushComponent {
    @Input()
    @tuiDefaultProp()
    heading = ``;

    @Input()
    @tuiDefaultProp()
    type = ``;

    @Input()
    @tuiDefaultProp()
    timestamp = 0;

    @Output()
    readonly close = new EventEmitter<void>();

    constructor(
        @Inject(TUI_CLOSE_WORD)
        readonly closeWord$: TuiInjectionTokenType<typeof TUI_CLOSE_WORD>,
    ) {}

    get closeable(): boolean {
        return tuiIsObserved(this.close);
    }
}
