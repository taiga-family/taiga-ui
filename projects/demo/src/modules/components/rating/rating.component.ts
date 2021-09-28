import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';

@Component({
    selector: 'example-rating',
    templateUrl: './rating.template.html',
    changeDetection,
})
export class ExampleTuiRatingComponent {
    tuiRateColor: string = 'var(--tui-accent)';
    tuiRateColors: string[] = [this.tuiRateColor, '#faaf00', 'pink'];
    tuiRateEmptyIcon: string = 'tuiIconStarLarge';
    tuiRateEmptyIcons: string[] = [this.tuiRateEmptyIcon, 'tuiIconStar'];
    tuiRateSelectedIcon: string = 'tuiIconStarFilledLarge';
    tuiRateSelectedIcons: string[] = [this.tuiRateSelectedIcon, 'tuiIconStarFilled'];
    tuiRateReadonly: boolean = false;
    tuiRateDisable: boolean = false;
    tuiRateActive: number = 0;
    tuiRateMax: number = 5;

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
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };
}
