import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {RawLoaderContent, TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiSizeXS, TuiSizeXXL} from '@taiga-ui/core';

@Component({
    selector: `example-avatar`,
    templateUrl: `./avatar.template.html`,
    changeDetection,
})
export class ExampleTuiAvatarComponent {
    readonly exampleOptions: RawLoaderContent = import(
        `./examples/import/define-options.md?raw`
    );

    readonly exampleModule: RawLoaderContent = import(
        `./examples/import/import-module.md?raw`
    );

    readonly exampleHtml: RawLoaderContent = import(
        `./examples/import/insert-template.md?raw`
    );

    readonly example1: TuiDocExample = {
        TypeScript: import(`./examples/1/index.ts?raw`),
        HTML: import(`./examples/1/index.html?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        TypeScript: import(`./examples/3/index.ts?raw`),
        HTML: import(`./examples/3/index.html?raw`),
    };

    readonly example4: TuiDocExample = {
        TypeScript: import(`./examples/4/index.ts?raw`),
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.html?raw`),
    };

    readonly avatarUrlVariants: readonly string[] = [
        `https://ng-web-apis.github.io/dist/assets/images/web-api.svg`,
    ];

    avatarUrl: string | null = null;

    text = `daenerys targaryen`;

    rounded = false;

    autoColor = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeXS | TuiSizeXXL> = [
        `xs`,
        `s`,
        `m`,
        `l`,
        `xl`,
        `xxl`,
    ];

    size = this.sizeVariants[2];

    border = `var(--tui-base-01)`;

    color = `var(--tui-text-01)`;

    background = `var(--tui-secondary-active)`;
}
