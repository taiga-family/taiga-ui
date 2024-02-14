import {
    ChangeDetectorRef,
    Component,
    ElementRef,
    Inject,
    Self,
    ViewChild,
} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED, TuiExpandComponent} from '@taiga-ui/core';
import {Observable, takeUntil, timer} from 'rxjs';

@Component({
    selector: 'example-expand',
    templateUrl: './expand.template.html',
    styleUrls: ['./expand.style.less'],
    changeDetection,
    providers: [TuiDestroyService],
})
export class ExampleTuiExpandComponent {
    @ViewChild(TuiExpandComponent, {read: ElementRef})
    expand?: ElementRef;

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    expanded = false;

    async = false;

    delayed = false;

    constructor(
        @Inject(ChangeDetectorRef) private readonly cdr: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) private readonly destroy$: Observable<void>,
    ) {}

    onExpandedChange(expanded: boolean): void {
        this.expanded = expanded;
        this.delayed = this.async && expanded;

        if (!this.async || !this.expanded) {
            return;
        }

        timer(5000)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                const event = new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true});

                this.delayed = false;
                this.cdr.detectChanges();
                this.expand?.nativeElement.dispatchEvent(event);
            });
    }
}
