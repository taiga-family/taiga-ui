import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {DemoRoute} from '@demo/routes';
import {TuiItemDirective} from '@taiga-ui/cdk';
import {TuiButtonDirective, TuiDialogModule, TuiLinkDirective} from '@taiga-ui/core';
import {
    TuiCarouselButtonsDirective,
    TuiCarouselComponent,
    TuiPaginationModule,
} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        TuiButtonDirective,
        TuiDialogModule,
        TuiCarouselComponent,
        TuiLinkDirective,
        RouterLink,
        TuiPaginationModule,
        TuiCarouselButtonsDirective,
        TuiItemDirective,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected readonly docRoutes = DemoRoute;
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
