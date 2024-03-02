import {Component, inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TUI_SHEET_DEFAULT_OPTIONS,
    type TuiSheet,
    type TuiSheetOptions,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {type PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'example-sheet',
    templateUrl: './sheet.template.html',
    styleUrls: ['./sheet.style.less'],
    changeDetection,
})
export class ExampleTuiSheetComponent {
    @ViewChild('template')
    protected readonly templateRef: PolymorpheusContent<TuiSheet<unknown>>;

    protected readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
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
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        LESS: import('./examples/6/index.less?raw'),
    };

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected closeable = TUI_SHEET_DEFAULT_OPTIONS.closeable;
    protected image = TUI_SHEET_DEFAULT_OPTIONS.image;
    protected imageSlide = TUI_SHEET_DEFAULT_OPTIONS.imageSlide;
    protected initial = TUI_SHEET_DEFAULT_OPTIONS.initial;
    protected overlay = TUI_SHEET_DEFAULT_OPTIONS.overlay;
    protected stops = TUI_SHEET_DEFAULT_OPTIONS.stops;

    protected open = false;

    protected readonly imageVariants = [
        this.image,
        '/assets/images/avatar.jpg',
        'Template',
    ];

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];

    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected get computedImage(): PolymorpheusContent<TuiSheet<unknown>> {
        return this.image === 'Template' ? this.templateRef : this.image;
    }

    protected get options(): Partial<TuiSheetOptions> {
        return {
            closeable: this.closeable,
            image: this.computedImage,
            imageSlide: this.imageSlide,
            stops: this.stops,
            initial: this.initial,
            overlay: this.overlay,
        };
    }

    protected toggle(): void {
        this.open = !this.open;
    }
}
