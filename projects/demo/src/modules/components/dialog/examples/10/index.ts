import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogService} from '@taiga-ui/core';

@Component({
    selector: 'tui-dialog-example-10',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiDialogExampleComponent10 {
    constructor(
        @Inject(TuiDialogService)
        readonly dialogs: TuiDialogService,
    ) {}

    showDialog(): void {
        this.dialogs
            .open(
                `
                <div class="pulldown-menu">
                    <div class="button">Print</div>
                    <div class="button">Delete List</div>
                    <div class="button cancel">Cancel</div>
                </div>
            `,
                {appearance: 'ios-style'},
            )
            .subscribe();
    }
}
