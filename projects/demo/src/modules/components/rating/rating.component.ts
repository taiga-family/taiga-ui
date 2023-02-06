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
        '!!raw-loader!./examples/import/import-module.md'
    );

    readonly exampleHtml: RawLoaderContent = import(
        '!!raw-loader!./examples/import/insert-template.md'
    );

    readonly exampleOptions: RawLoaderContent = import(
        '!!raw-loader!./examples/import/define-options.md'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
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
