import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TUI_PARENT_ANIMATION} from '@taiga-ui/cdk/constants';
import {TuiAriaDialogContext} from '@taiga-ui/cdk/interfaces';
import {TUI_DIALOG, TUI_DIALOGS} from '@taiga-ui/cdk/tokens';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

@Component({
    selector: 'tui-dialog-host',
    templateUrl: './dialog-host.template.html',
    styleUrls: ['./dialog-host.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [TUI_PARENT_ANIMATION],
})
export class TuiDialogHostComponent<T extends TuiAriaDialogContext> {
    constructor(
        @Inject(TUI_DIALOG) readonly dialog: PolymorpheusContent<T>,
        @Inject(TUI_DIALOGS) readonly dialogs$: Observable<ReadonlyArray<T>>,
    ) {}
}
