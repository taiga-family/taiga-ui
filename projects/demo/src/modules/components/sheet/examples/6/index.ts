import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSheetOptions} from '@taiga-ui/addon-mobile';

@Component({
    selector: `tui-sheet-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSheetExample6 {
    open = false;

    readonly options: Partial<TuiSheetOptions> = {
        overlay: true,
        stops: [`5rem`],
    };

    readonly images = [
        `https://m.media-amazon.com/images/M/MV5BOTEzOTMzNzcwNF5BMl5BanBnXkFtZTgwNDcxODUyMjI@._V1_FMjpg_UX1280_.jpg`,
        `https://m.media-amazon.com/images/M/MV5BNzg0MzEwNDgwN15BMl5BanBnXkFtZTgwNTcxODUyMjI@._V1_FMjpg_UX1024_.jpg`,
        `https://m.media-amazon.com/images/M/MV5BOTE0MTMxMTY3NF5BMl5BanBnXkFtZTgwNDc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`,
        `https://m.media-amazon.com/images/M/MV5BNjc4ODAyMDg3NF5BMl5BanBnXkFtZTgwOTY3NjIwMjE@._V1_FMjpg_UX600_.jpg`,
        `https://m.media-amazon.com/images/M/MV5BMTU3NDY1MTk3M15BMl5BanBnXkFtZTgwMjc3NjIwMjE@._V1_FMjpg_UX1024_.jpg`,
    ];

    toggle(): void {
        this.open = !this.open;
    }

    onIntersection(
        [{isIntersecting}]: IntersectionObserverEntry[],
        {classList}: HTMLElement,
    ): void {
        classList.toggle(`_visible`, isIntersecting);
    }
}
