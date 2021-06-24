import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {combineLatest, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-dialog-host',
    templateUrl: './dialog-host.template.html',
    styleUrls: ['./dialog-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiDialogHostComponent<T extends TuiAriaDialogContext> {
    readonly dialogs$ = combineLatest(this.dialogsByType).pipe(
        map(allTypesDialogs =>
            new Array<T>()
                .concat(...allTypesDialogs)
                .sort((a, b) => a.createdAt - b.createdAt),
        ),
    );

    constructor(
        @Inject(TUI_DIALOGS)
        private readonly dialogsByType: Observable<readonly T[]>[],
    ) {}
}
