import {Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';

@Component({
    selector: 'example-avatar',
    templateUrl: './avatar.template.html',
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    readonly exampleImportModule: RawLoaderContent = import(
        '!!raw-loader!./examples/import/import-module.txt'
    );

    readonly exampleInsertTemplate: RawLoaderContent = import(
        '!!raw-loader!./examples/import/insert-template.txt'
    );

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly avatarUrlVariants: readonly string[] = [
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg',
    ];

    avatarUrl = null;

    text = 'daenerys targaryen';

    rounded = false;

    autoColor = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
    ];

    size = this.sizeVariants[2];
}
