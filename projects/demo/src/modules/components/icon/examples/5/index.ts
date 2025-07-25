import {Component, SkipSelf, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiHandler, TuiStringHandler} from '@taiga-ui/cdk';
import {
    TUI_ICON_MODE_RESOLVER,
    TUI_ICON_SVG_RESOURCE_RESOLVER,
    TuiIcon,
    type TuiIconResource,
    type TuiResolvedIconMode,
} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_ICON_MODE_RESOLVER,
            deps: [[new SkipSelf(), TUI_ICON_MODE_RESOLVER]],
            useFactory: (res: TuiHandler<string, TuiResolvedIconMode>) => {
                return (icon: string) => {
                    return icon.startsWith('@')
                        ? res(icon)
                        : {
                              className: 'tui-svg-icon',
                              resourceResolver: (name: string) => ({
                                  path: `url(/assets/icons/${name}.svg)`,
                                  src: `/assets/icons/${name}.svg`,
                              }),
                          };
                };
            },
        },
    ],
})
export default class Example {}
