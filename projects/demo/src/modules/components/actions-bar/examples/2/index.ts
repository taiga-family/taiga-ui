import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiActionsBarComponent, TuiActionsBarsService} from '@taiga-ui/kit';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import type {Subscription} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiActionsBarComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    private readonly actionsBarsService = inject(TuiActionsBarsService);

    @ViewChild('actionsBarTemplate')
    protected actionsBarTemplate: PolymorpheusContent;

    protected subscription?: Subscription;

    protected open(): void {
        this.subscription?.unsubscribe();

        this.subscription = this.actionsBarsService
            .open(this.actionsBarTemplate)
            .subscribe();
    }
}
