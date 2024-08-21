import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TUI_ASSETS_PATH, TUI_ICON_START_RESOLVER, TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    template: '<tui-icon icon="@tui.circle-dollar-sign" />',
    encapsulation,
    changeDetection,
    providers: [
        {
            deps: [TUI_ASSETS_PATH, WA_WINDOW],
            provide: TUI_ICON_START_RESOLVER,
            useFactory(path: string, win: Window) {
                return async (icon: string) => {
                    if (!icon || icon.includes('/')) {
                        return icon;
                    }

                    const url = `${path}/${icon.replace('@tui.', '').split('.').join('/')}.svg`;

                    return fetch(url)
                        .then(async (response) => response.text())
                        .then((svg) => `data:image/svg+xml;base64,${win.btoa(svg)}`);
                };
            },
        },
    ],
})
export default class Example {}
