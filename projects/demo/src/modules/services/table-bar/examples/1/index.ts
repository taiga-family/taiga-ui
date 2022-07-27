import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subscription} from 'rxjs';

@Component({
    selector: `tui-table-bar-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTableBarExampleComponent1 {
    @ViewChild(`tableBarTemplate`)
    tableBarTemplate: PolymorpheusContent = ``;

    subscription = new Subscription();

    constructor(
        @Inject(TuiTableBarsService)
        private readonly tableBarsService: TuiTableBarsService,
    ) {}

    showTableBar(): void {
        this.subscription.unsubscribe();

        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || ``, {
                hasCloseButton: true,
                adaptive: true,
            })
            .subscribe();
    }
}
