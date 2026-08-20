import {AsyncPipe, NgIf} from '@angular/common';
import {
    type AfterContentChecked,
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    ElementRef,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {TuiLet} from '@taiga-ui/cdk/directives/let';
import {tuiValue} from '@taiga-ui/cdk/utils/dom';

@Component({
    standalone: true,
    selector: 'tui-input-inline',
    imports: [AsyncPipe, NgIf, TuiLet],
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        tuiInputInlineV: TUI_VERSION,
    },
})
export class TuiInputInline implements AfterContentChecked {
    @ContentChild(NgControl, {read: ElementRef})
    private readonly input?: ElementRef<HTMLInputElement>;

    private readonly inputQuery = signal<ElementRef<HTMLInputElement> | undefined>(
        undefined,
    );

    protected readonly value = tuiValue(this.inputQuery);

    public ngAfterContentChecked(): void {
        this.inputQuery.set(this.input);
    }
}
