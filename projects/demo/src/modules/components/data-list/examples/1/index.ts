import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_ARROW} from '@taiga-ui/kit';

@Component({
    selector: `tui-data-list-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDataListExample1 {
    readonly arrow = TUI_ARROW;

    readonly groups = [
        {
            label: $localize`Components`,
            items: [
                {
                    label: `Input`,
                    routerLink: `/components/input`,
                },
                {
                    label: `Select`,
                    routerLink: `/components/select`,
                },
                {
                    label: `DataList`,
                    routerLink: `/components/data-list`,
                },
            ],
        },
        {
            label: $localize`Styles`,
            items: [
                {
                    label: $localize`Icons`,
                    routerLink: `/icons`,
                },
                {
                    label: $localize`Typography`,
                    routerLink: `/typography`,
                },
            ],
        },
        {
            label: ``,
            items: [
                {
                    label: $localize`Changelog`,
                    routerLink: `/changelog`,
                },
            ],
        },
    ];
}
