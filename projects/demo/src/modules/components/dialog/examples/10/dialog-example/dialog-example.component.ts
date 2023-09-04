import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';
import {TuiDialog} from '@taiga-ui/cdk';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'ios-dialog',
    templateUrl: './dialog-example.component.html',
    styleUrls: ['./dialog-example.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogIosExampleComponent {
    constructor(@Inject(POLYMORPHEUS_CONTEXT) readonly context: TuiDialog<void, void>) {}
}
