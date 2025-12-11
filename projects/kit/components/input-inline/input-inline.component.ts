import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ViewEncapsulation,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {switchMap} from 'rxjs';

@Component({
    selector: 'tui-input-inline',
    templateUrl: './input-inline.template.html',
    styleUrl: './input-inline.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputInline {
    protected readonly control = contentChild(NgControl);
    protected readonly value = toSignal(
        toObservable(this.control).pipe(switchMap(tuiControlValue)),
    );
}
