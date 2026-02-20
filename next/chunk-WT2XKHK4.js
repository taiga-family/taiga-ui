import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiButton, TuiLink} from '@taiga-ui/core';
import {TuiCarousel, TuiPager} from '@taiga-ui/kit';
import {TuiDialog} from '@taiga-ui/legacy';

@Component({
    imports: [RouterLink, TuiButton, TuiCarousel, TuiDialog, TuiLink, TuiPager],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly routes = DemoRoute;
    protected open = false;

    protected index = 0;

    protected get background(): string {
        switch (this.index) {
            case 0:
                return 'url(https://cdn.tvc.ru/pictures/mood/bw/194/22.jpg)';
            case 1:
                return 'url(https://ic.pics.livejournal.com/ruhtal/6943012/12468/12468_900.jpg)';
            default:
                return 'url(https://cdn.motor1.com/images/mgl/28bxz/s1/ford-carousel.jpg)';
        }
    }

    protected onClick(): void {
        this.index = 0;
        this.open = true;
    }

    protected navigate(delta: number): void {
        this.index = (this.index + delta) % 3;
    }
}
`;export{o as default};
