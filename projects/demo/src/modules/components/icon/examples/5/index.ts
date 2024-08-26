import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ICON_RESOLVER, TuiIcon} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiIcon],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_ICON_RESOLVER,
            useFactory: () => {
                const original = inject(TUI_ICON_RESOLVER, {skipSelf: true});

                return (name: string) =>
                    name.startsWith('@tui.')
                        ? original(name)
                        : `/assets/icons/${name}.svg`;
            },
        },
    ],
    encapsulation,
    changeDetection,
})
export default class Example {}
