import"./chunk-B4AJQJMI.js";var o=`import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiDemo} from '@demo/utils';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [TuiBadge, TuiCardLarge, TuiDemo, TuiHeader, TuiPlatform, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page {
    protected readonly install = import('./examples/install.md');
    protected readonly jestConfig = import('./examples/jest-config.md');
    protected readonly jestCustomConfig = import('./examples/jest-config-custom.md');
    protected readonly setupJest = import('./examples/setup-jest.md');
}
`;export{o as default};
