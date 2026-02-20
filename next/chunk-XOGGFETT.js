import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';

@Component({
    imports: [TuiDemo],
    templateUrl: './index.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly install = {Terminal: import('./examples/install.md')};

    protected readonly config = {'jest.config.ts': import('./examples/jest-config.md')};

    protected readonly manual = {
        'jest.config.ts': import('./examples/jest-config-custom.md'),
        'setup-jest.ts': import('./examples/setup-jest.md'),
    };
}
`;export{o as default};
