import {Component, Inject, ViewChild} from '@angular/core';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {Subscription} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-table-bar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTableBarExampleComponent1 {
    subscription = new Subscription();

    @ViewChild('tableBarTemplate', {read: PolymorpheusTemplate})
    tableBarTemplate?: PolymorpheusTemplate<{}>;

    constructor(
        @Inject(TuiTableBarsService)
        private readonly tableBarsService: TuiTableBarsService,
    ) {}

    showTableBar() {
        this.subscription.unsubscribe();

        this.subscription = this.tableBarsService
            .showTableBar(this.tableBarTemplate || '', {
                hasCloseButton: true,
            })
            .subscribe();
    }
}
