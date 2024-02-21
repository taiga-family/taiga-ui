import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TUI_EXPAND_LOADED, TuiSizeS} from '@taiga-ui/core';
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
    content?: ElementRef;

    async = false;
    closeOthers = true;
    disabled = false;
    noPadding = false;
    open = false;
    rounded = true;
    showArrow = true;
    disableHover = false;

    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('./examples/3/index.ts?raw'),
        HTML: import('./examples/3/index.html?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('./examples/4/index.ts?raw'),
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
    };

    readonly bordersVariants = ['all', 'top-bottom'] as const;

    borders: 'all' | 'top-bottom' = this.bordersVariants[0];

    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    onOpenChange(open: boolean): void {
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
