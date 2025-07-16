import {AsyncPipe, NgIf} from '@angular/common';
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
    standalone: true,
    selector: 'tui-input-inline-textarea',
    imports: [AsyncPipe, NgIf, TuiLet],
    templateUrl: './input-inline-textarea.template.html',
    styleUrls: ['./input-inline-textarea.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputInlineTextarea {
    @ContentChild(NgControl)
    private readonly control?: NgControl;

    protected readonly value$ = defer(() => tuiControlValue(this.control));
}