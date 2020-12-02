import {Component, Inject, TemplateRef} from '@angular/core';
import {TuiPortalService} from '@taiga-ui/cdk';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dialog-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent4 {
    filters = false;

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(TuiPortalService) private readonly portalService: TuiPortalService,
    ) {}

    onFilterClick() {
        this.filters = true;
        this.dialogService.open('Попап с фильтрами').subscribe({
            complete: () => {
                this.filters = false;
            },
        });
    }

    showDialog(content: PolymorpheusTemplate<TuiDialogContext>, button: TemplateRef<{}>) {
        const templateRef = this.portalService.addTemplate(button);

        this.dialogService
            .open(content, {
                closeable: false,
                dismissible: true,
            })
            .subscribe({
                complete: () => {
                    this.portalService.removeTemplate(templateRef);
                },
            });
    }
}
