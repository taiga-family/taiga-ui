import {Component, inject, ViewChild} from '@angular/core';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subscription} from 'rxjs';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-table-bar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTableBarExampleComponent1 {
    private readonly tableBarsService = inject(TuiTableBarsService);

    @ViewChild('tableBarTemplate')
    protected tableBarTemplate: PolymorpheusContent;

    protected subscription = new Subscription();

    protected showTableBar(): void {
        this.subscription.unsubscribe();

        this.subscription = this.tableBarsService
            .open(this.tableBarTemplate || '', {
                hasCloseButton: true,
                adaptive: true,
            })
            .subscribe();
    }
}
