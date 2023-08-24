import {Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-pin-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPinExample5 {
    @ViewChild('pointer', {read: ElementRef})
    private readonly pointer!: ElementRef<HTMLElement>;

    @HostListener('document:mousemove', ['$event'])
    drawPosition(event: MouseEvent | TouchEvent): void {
        const [clientX, clientY] = this.getCursorPosition(event);
        const rect = this.pointer.nativeElement.getBoundingClientRect();
        const x = Math.ceil(clientX - (rect.left + rect.width / 2));
        const y = Math.ceil(clientY - (rect.top + rect.height / 2));
        const degrees = Math.atan2(x, y) * (180 / Math.PI) * -1 + 180;

        this.pointer.nativeElement.style.transform = `rotate(${degrees}deg)`;
    }

    private getCursorPosition(event: MouseEvent | TouchEvent): [number, number] {
        let clientX = (event as MouseEvent)?.clientX;
        let clientY = (event as MouseEvent)?.clientY;

        if ((event as TouchEvent)?.targetTouches?.[0]) {
            event.preventDefault();

            const pointerEvent = (event as TouchEvent)?.targetTouches[0];

            clientX = pointerEvent.pageX;
            clientY = pointerEvent.pageY;
        }

        return [clientX, clientY];
    }
}
