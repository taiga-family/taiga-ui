import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {
    TUI_SHEET_DEFAULT_OPTIONS,
    TuiSheet,
    TuiSheetOptions,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

// @dynamic
@Component({
    selector: 'example-sheet',
    templateUrl: './sheet.template.html',
    styleUrls: ['./sheet.style.less'],
    changeDetection,
})
export class ExampleTuiSheetComponent {
    @ViewChild('template')
    readonly templateRef: PolymorpheusContent<TuiSheet<unknown>> = '';

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/3/index.ts'),
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/4/index.ts'),
        HTML: import('!!raw-loader!./examples/4/index.html'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/5/index.ts'),
        HTML: import('!!raw-loader!./examples/5/index.html'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
    };

    readonly example6: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/6/index.ts'),
        HTML: import('!!raw-loader!./examples/6/index.html'),
        LESS: import('!!raw-loader!./examples/6/index.less'),
    };

    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    closeable = TUI_SHEET_DEFAULT_OPTIONS.closeable;
    image = TUI_SHEET_DEFAULT_OPTIONS.image;
    imageSlide = TUI_SHEET_DEFAULT_OPTIONS.imageSlide;
    initial = TUI_SHEET_DEFAULT_OPTIONS.initial;
    overlay = TUI_SHEET_DEFAULT_OPTIONS.overlay;
    stops = TUI_SHEET_DEFAULT_OPTIONS.stops;

    open = false;

    readonly imageVariants = [this.image, '/assets/images/avatar.jpg', 'Template'];

    readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];

    constructor(@Inject(TUI_IS_MOBILE) readonly isMobile: boolean) {}

    get computedImage(): PolymorpheusContent<TuiSheet<unknown>> {
        return this.image === 'Template' ? this.templateRef : this.image;
    }

    get options(): Partial<TuiSheetOptions> {
        return {
            closeable: this.closeable,
            image: this.computedImage,
            imageSlide: this.imageSlide,
            stops: this.stops,
            initial: this.initial,
            overlay: this.overlay,
        };
    }

    toggle(): void {
        this.open = !this.open;
    }
}
