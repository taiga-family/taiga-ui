import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {merge, Observable} from 'rxjs';

@Component({
    selector: 'tui-dialog-host',
    templateUrl: './dialog-host.template.html',
    styleUrls: ['./dialog-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiDialogHostComponent<T extends TuiAriaDialogContext> {
    readonly dialogs$ = merge(...this.dialogs);

    constructor(
        @Inject(TUI_DIALOGS)
        private readonly dialogs: ReadonlyArray<Observable<ReadonlyArray<T>>>,
    ) {}
}
