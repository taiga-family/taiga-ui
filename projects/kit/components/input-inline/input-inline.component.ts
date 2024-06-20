import {AsyncPipe, NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostListener,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {tuiIsElement, tuiIsInput} from '@taiga-ui/cdk/utils/dom';
import {defer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'tui-input-inline',
    imports: [NgIf, TuiLet, AsyncPipe],
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputInline {
    @ContentChild(NgControl)
    private readonly control?: NgControl;

    protected readonly value$ = defer(() => tuiControlValue(this.control!));

    protected indent = -1;

    @HostListener('scroll.capture', ['$event.target'])
    protected onScroll(target: EventTarget | null): void {
        if (tuiIsElement(target) && tuiIsInput(target)) {
            this.indent = -target.scrollLeft - 1; // -1 for Safari (see styles)
        }
    }
}
