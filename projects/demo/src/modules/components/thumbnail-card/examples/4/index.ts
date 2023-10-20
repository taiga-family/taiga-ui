import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiThumbnailCardPresetsProvider} from '@taiga-ui/addon-commerce';

@Component({
    selector: 'tui-thumbnail-card-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    providers: [
        tuiThumbnailCardPresetsProvider({
            star: {
                color: 'black',
                background:
                    'linear-gradient(45deg, #ffaa00d1, #ffaa00), url(/assets/taiga-ui/icons/tuiIconStarLarge.svg)',
            },
            gradient: {
                color: 'white',
                background:
                    '#2b9aff linear-gradient(110deg, transparent 70%, #0780ff 71%, #db028b 100%)',
            },
            pink: {
                color: '#0079be',
                background: 'pink',
            },
            radial: {
                color: 'white',
                background: 'radial-gradient(#c900ff, #0079be)',
            },
        }),
    ],
})
export class TuiThumbnailCardExample4 {}
