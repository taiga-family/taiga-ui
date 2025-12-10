import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    contentChild,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {defer} from 'rxjs';

@Component({
    selector: 'tui-input-inline',
    imports: [AsyncPipe],
    templateUrl: './input-inline.template.html',
    styleUrl: './input-inline.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputInline {
    private readonly control = contentChild(NgControl);

    protected readonly value$ = defer(() => tuiControlValue(this.control()));
}
