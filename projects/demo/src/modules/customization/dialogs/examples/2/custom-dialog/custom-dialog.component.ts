import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogCloseService, TuiDialogComponent} from '@taiga-ui/core';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

@Component({
    selector: 'custom-dialog',
    imports: [PolymorpheusOutlet],
    template: `
        <ng-container *polymorpheusOutlet="context.content as text; context: context">
            {{ text }}
        </ng-container>
    `,
    styleUrl: './custom-dialog.style.less',
    changeDetection,
    providers: [TuiDialogCloseService],
})
export class TuiCustomDialogComponent<O, I> extends TuiDialogComponent<O, I> {}
