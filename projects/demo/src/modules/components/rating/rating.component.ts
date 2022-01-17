import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-rating',
    templateUrl: './rating.template.html',
    changeDetection,
})
export class ExampleTuiRatingComponent {
    control = new FormControl(5);
    colorVariants = ['var(--tui-accent)', '#faaf00', 'pink'];
    color = this.colorVariants[0];
    iconNormalVariants = ['tuiIconStarLarge', 'tuiIconStar'];
    iconNormal = this.iconNormalVariants[0];
    iconFilledVariants = ['tuiIconStarFilledLarge', 'tuiIconStarFilled'];
    iconFilled = this.iconFilledVariants[0];
    readOnly = false;
    max = 10;
    min = 0;

    readonly exampleImportModule: RawLoaderContent = import(
        '!!raw-loader!./examples/import/import-module.md'
    );

    readonly exampleInsertTemplate: RawLoaderContent = import(
        '!!raw-loader!./examples/import/insert-template.md'
    );

    readonly exampleDefineOptions: RawLoaderContent = import(
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
}
