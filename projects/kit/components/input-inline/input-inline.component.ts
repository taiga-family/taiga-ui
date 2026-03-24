import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ViewEncapsulation,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {switchMap} from 'rxjs';

@Component({
    selector: 'tui-input-inline',
    templateUrl: './input-inline.template.html',
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-inline.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {'data-tui-version': TUI_VERSION},
})
export class TuiInputInline {
    protected readonly control = contentChild(NgControl);
    protected readonly value = toSignal(
        toObservable(this.control).pipe(switchMap(tuiControlValue)),
    );
}
