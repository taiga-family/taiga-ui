import {Component, type ElementRef, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED, type TuiSizeS} from '@taiga-ui/core';
import {takeUntil, timer} from 'rxjs';

@Component({
    selector: 'example-accordion',
    templateUrl: './accordion.template.html',
    changeDetection,
    providers: [TuiDestroyService],
})
export class ExampleTuiAccordionComponent {
    private readonly destroy$ = inject(TuiDestroyService, {self: true});

    @ViewChild('content')
    protected content?: ElementRef;

    protected async = false;
    protected closeOthers = true;
    protected disabled = false;
    protected noPadding = false;
    protected open = false;
    protected rounded = true;
    protected showArrow = true;
    protected disableHover = false;

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    protected readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    protected readonly bordersVariants = ['all', 'top-bottom'] as const;

    protected borders: 'all' | 'top-bottom' = this.bordersVariants[0];

    protected readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    protected size: TuiSizeS = this.sizeVariants[1];

    protected onOpenChange(open: boolean): void {
        this.open = open;

        if (!this.async || !open) {
            return;
        }

        timer(3000)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() =>
                this.content?.nativeElement.dispatchEvent(
                    new CustomEvent(TUI_EXPAND_LOADED, {bubbles: true}),
                ),
            );
    }
}
