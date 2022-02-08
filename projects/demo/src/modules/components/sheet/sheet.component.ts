import {Component, Inject, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {
    TUI_SHEET_DEFAULT_OPTIONS,
    TuiSheet,
    TuiSheetOptions,
} from '@taiga-ui/addon-mobile';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';
import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';
import {default as example5Html} from '!!raw-loader!./examples/5/index.html';
import {default as example5Less} from '!!raw-loader!./examples/5/index.less';
import {default as example5Ts} from '!!raw-loader!./examples/5/index.ts';
import {default as example6Html} from '!!raw-loader!./examples/6/index.html';
import {default as example6Less} from '!!raw-loader!./examples/6/index.less';
import {default as example6Ts} from '!!raw-loader!./examples/6/index.ts';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

// @dynamic
@Component({
    selector: 'example-sheet',
    templateUrl: './sheet.template.html',
    styleUrls: ['./sheet.style.less'],
    changeDetection,
})
export class ExampleTuiSheetComponent {
    @ViewChild('template')
    readonly templateRef: PolymorpheusContent<TuiSheet<any>> = '';

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
        LESS: example6Less,
    };

    readonly exampleModule = exampleModule;

    readonly exampleHtml = exampleHtml;

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

    get computedImage(): PolymorpheusContent<TuiSheet<any>> {
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

    toggle() {
        this.open = !this.open;
    }
}
