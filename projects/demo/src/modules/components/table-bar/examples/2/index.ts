import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonDirective} from '@taiga-ui/core';
import {
    TuiTableBarComponent,
    TuiTableBarDirective,
    TuiTableBarsService,
} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Subscription} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiTableBarDirective, TuiTableBarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    private readonly tableBarsService = inject(TuiTableBarsService);

    @ViewChild('tableBarTemplate')
    protected tableBarTemplate: PolymorpheusContent;

    protected subscription?: Subscription;

    protected open(): void {
        this.subscription?.unsubscribe();

        this.subscription = this.tableBarsService.open(this.tableBarTemplate).subscribe();
    }
}
