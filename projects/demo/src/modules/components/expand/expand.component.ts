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
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_EXPAND_LOADED, TuiExpandComponent} from '@taiga-ui/core';
import {timer} from 'rxjs';

@Component({
    selector: 'example-expand',
    templateUrl: './expand.template.html',
    styleUrls: ['./expand.style.less'],
    changeDetection,
})
export class ExampleTuiExpandComponent {
    private readonly cdr = inject(ChangeDetectorRef);
    private readonly destroyRef = inject(DestroyRef);

    @ViewChild(TuiExpandComponent, {read: ElementRef})
    protected expand?: ElementRef;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

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
