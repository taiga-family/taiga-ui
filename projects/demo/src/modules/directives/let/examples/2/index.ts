import {Component, DestroyRef, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';

@Component({
    imports: [TuiBadge, TuiLet],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly destroyRef = inject(DestroyRef);
    private readonly alerts = inject(TuiAlertService);

    protected get getter(): string {
        this.alerts
            .open('Getter called')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe();

        return '🐳';
    }
}
