import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-carousel-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiCarouselExample5 {
    index = 0;

    readonly itemsCount = 3;

    readonly items = [
        {title: `First`, content: `First content`},
        {title: `Title #2`, content: `Much more content here so the height is bigger`},
        {title: `Title III`, content: `Small item again`},
        {title: `Title four`, content: `Relatively ling content here`},
        {title: `Fifth item`, content: `Tiny text`},
        {title: `6`, content: `That one's short too`},
        {title: `Lucky 7`, content: `This takes about two lines or so`},
        {title: `Eighth card`, content: `Almost the last one`},
        {title: `X`, content: `This is the longest item there is in this list`},
    ];

    get rounded(): number {
        return Math.floor(this.index / this.itemsCount);
    }

    onIndex(index: number): void {
        this.index = index * this.itemsCount;
    }
}
