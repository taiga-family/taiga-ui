import {AsyncPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {defer} from 'rxjs';

@Component({
    selector: 'tui-input-inline',
    imports: [AsyncPipe, TuiLet],
    templateUrl: './input-inline.template.html',
    styleUrl: './input-inline.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputInline {
    @ContentChild(NgControl)
    private readonly control?: NgControl;

    protected readonly value$ = defer(() => tuiControlValue(this.control));
}
