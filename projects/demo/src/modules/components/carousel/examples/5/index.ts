import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-carousel-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCarouselExample5 {
    index = 0;

    readonly itemsCount = 3;

    readonly items = [
        {content: 'First content', title: 'First'},
        {content: 'Much more content here so the height is bigger', title: 'Title #2'},
        {content: 'Small item again', title: 'Title III'},
        {content: 'Relatively ling content here', title: 'Title four'},
        {content: 'Tiny text', title: 'Fifth item'},
        // eslint-disable-next-line @typescript-eslint/quotes
        {content: "That one's short too", title: '6'},
        {content: 'This takes about two lines or so', title: 'Lucky 7'},
        {content: 'Almost the last one', title: 'Eighth card'},
        {content: 'This is the longest item there is in this list', title: 'X'},
    ];

    get rounded(): number {
        return Math.floor(this.index / this.itemsCount);
    }

    onIndex(index: number): void {
        this.index = index * this.itemsCount;
    }
}
