import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-rating',
    templateUrl: './rating.template.html',
    changeDetection,
})
export class ExampleTuiRatingComponent {
    min: number = 0;
    max: number = 10;
    value: number = 5;
    color: string = 'var(--tui-accent)';
    colorVariants: string[] = [this.color, '#faaf00', 'pink'];
    iconNormal: string = 'tuiIconStarLarge';
    iconNormalVariants: string[] = [this.iconNormal, 'tuiIconStar'];
    iconFilled: string = 'tuiIconStarFilledLarge';
    iconFilledVariants: string[] = [this.iconFilled, 'tuiIconStarFilled'];
    readOnly: boolean = false;
    disabled: boolean = false;

    readonly exampleImportModule: RawLoaderContent = import(
        '!!raw-loader!./examples/import/import-module.txt'
    );

    readonly exampleInsertTemplate: RawLoaderContent = import(
        '!!raw-loader!./examples/import/insert-template.txt'
    );

    readonly exampleDefineOptions: RawLoaderContent = import(
        '!!raw-loader!./examples/import/define-options.txt'
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
