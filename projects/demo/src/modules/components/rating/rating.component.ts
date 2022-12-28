import {Component, Inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TUI_RATING_OPTIONS, TuiRatingOptions} from '@taiga-ui/kit';

@Component({
    selector: 'example-rating',
    templateUrl: './rating.template.html',
    styleUrls: ['./rating.template.less'],
    changeDetection,
    encapsulation,
})
export class ExampleTuiRatingComponent {
    readonly exampleModule: RawLoaderContent = import(
        './examples/import/import-module.md?raw'
    );

    readonly exampleHtml: RawLoaderContent = import(
        './examples/import/insert-template.md?raw'
    );

    readonly exampleOptions: RawLoaderContent = import(
        './examples/import/define-options.md?raw'
    );

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

    control = new FormControl(5);
    colorVariants = ['var(--tui-accent)', '#faaf00', 'pink'];
    color = this.colorVariants[0];

    iconNormalVariants = [
        this.options.iconNormal,

        // other icons work only in public demo
        'tuiIconStarLarge',
        'tuiIconStar',
    ];

    iconNormal = this.iconNormalVariants[0];

    iconFilledVariants = [
        this.options.iconFilled,

        // other icons work only in public demo
        'tuiIconStarFilledLarge',
        'tuiIconStarFilled',
    ];

    iconFilled = this.iconFilledVariants[0];
    readOnly = false;
    min = 0;
    max = 10;

    constructor(@Inject(TUI_RATING_OPTIONS) private readonly options: TuiRatingOptions) {}

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }
}
