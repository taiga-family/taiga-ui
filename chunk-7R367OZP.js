import"./chunk-HU6DUUP4.js";var n=`import {Component, SkipSelf} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiStringHandler} from '@taiga-ui/cdk';
import {TUI_ICON_RESOLVER, TuiIcon} from '@taiga-ui/core';

@Component({
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_ICON_RESOLVER,
            deps: [[new SkipSelf(), TUI_ICON_RESOLVER]],
            useFactory(defaultResolver: TuiStringHandler<string>) {
                return (name: string) =>
                    name.startsWith('@tui.')
                        ? defaultResolver(name)
                        : \`/assets/icons/\${name}.svg\`;
            },
        },
    ],
})
export default class Example {}
`;export{n as default};
