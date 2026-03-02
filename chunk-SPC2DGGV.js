import"./chunk-HU6DUUP4.js";var o=`import {Component, ElementRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    imports: [TuiCompass],
    template: '<tui-compass [degrees]="degrees" />',
    encapsulation,
    changeDetection,
    host: {'(document:mousemove)': 'calculate($event)'},
})
export default class Example {
    @ViewChild(TuiCompass, {read: ElementRef})
    private readonly compass?: ElementRef<HTMLElement>;

    protected degrees = 0;

    protected calculate(event: MouseEvent): void {
        const rect =
            this.compass?.nativeElement.getBoundingClientRect() ?? EMPTY_CLIENT_RECT;
        const x = Math.ceil(event.clientX - (rect.left + rect.width / 2));
        const y = Math.ceil(event.clientY - (rect.top + rect.height / 2));

        this.degrees = Math.atan2(y, x) * (180 / Math.PI) + 90;
    }
}
`;export{o as default};
