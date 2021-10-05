import {Component, ElementRef, Inject} from '@angular/core';
import {TuiScrollService} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-scroll-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiScrollExample1 {
    scrollTop = 0;
    scrollLeft = 0;
    duration = 300;

    constructor(
        @Inject(TuiScrollService) private readonly scrollService: TuiScrollService,
    ) {}

    onClick({nativeElement}: ElementRef<HTMLElement>) {
        this.scrollService
            .scroll$(nativeElement, this.scrollTop, this.scrollLeft, this.duration)
            .subscribe();
    }
}
