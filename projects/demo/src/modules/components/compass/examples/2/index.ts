import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk';
import {TuiCompass} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiCompass],
    template: '<tui-compass [degrees]="degrees"></tui-compass>',
    encapsulation,
    changeDetection,
})
export default class Example {
    @ViewChild(TuiCompass, {read: ElementRef})
    private readonly compass?: ElementRef<HTMLElement>;

    protected degrees = 0;

    @HostListener('document:mousemove', ['$event'])
    protected calculate(event: MouseEvent): void {
        const rect =
            this.compass?.nativeElement.getBoundingClientRect() ?? EMPTY_CLIENT_RECT;
        const x = Math.ceil(event.clientX - (rect.left + rect.width / 2));
        const y = Math.ceil(event.clientY - (rect.top + rect.height / 2));

        this.degrees = 180 - Math.atan2(x, y) * (180 / Math.PI);
    }
}
