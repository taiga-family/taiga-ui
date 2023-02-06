import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

@Component({
    selector: 'example-avatar',
    templateUrl: './avatar.template.html',
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    readonly exampleOptions: RawLoaderContent = import(
        '!!raw-loader!./examples/import/define-options.md'
    );

    readonly exampleModule: RawLoaderContent = import(
        '!!raw-loader!./examples/import/import-module.md'
    );

    readonly exampleHtml: RawLoaderContent = import(
        '!!raw-loader!./examples/import/insert-template.md'
    );

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
    };

    readonly avatarUrlVariants: readonly string[] = [
        'https://ng-web-apis.github.io/dist/assets/images/web-api.svg',
    ];

    avatarUrl: string | null = null;

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

    color = 'var(--tui-text-01)';

    background = 'var(--tui-secondary-active)';
}
