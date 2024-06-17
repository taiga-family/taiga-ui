import {
    ChangeDetectorRef,
    Component,
    DestroyRef,
    ElementRef,
    inject,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TUI_EXPAND_LOADED, TuiExpand, TuiExpandComponent} from '@taiga-ui/core';
import {timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiExpand],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);

    @ViewChild(TuiExpandComponent, {read: ElementRef})
    protected expand?: ElementRef;

    protected expanded = false;

    protected async = false;

    protected delayed = false;

    protected onExpandedChange(expanded: boolean): void {
        this.expanded = expanded;
        this.delayed = this.async && expanded;

        if (!this.async || !this.expanded) {
            return;
        }

        timer(5000)
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe(() => {
                const event = new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true});

                this.delayed = false;
                this.cdr.detectChanges();
                this.expand?.nativeElement.dispatchEvent(event);
            });
    }
}
