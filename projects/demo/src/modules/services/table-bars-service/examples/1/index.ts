import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTableBarsService} from '@taiga-ui/addon-tablebars';
import {TuiButtonDirective} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Subscription} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
