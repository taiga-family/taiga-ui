import {AsyncPipe, NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import {TUI_SANITIZER, TuiSvgComponent, TuiSvgService} from '@taiga-ui/core';
import {tuiIconClockLarge, tuiIconMaestro, tuiIconMastercard} from '@taiga-ui/icons';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {map, timer} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiSvgComponent, NgIf, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export default class ExampleComponent {
    protected readonly timeout$ = timer(0).pipe(map(TUI_TRUE_HANDLER));

    protected readonly imageUrl = assets`/images/ts.svg#ts`;

    protected readonly svg = `
        <svg height="6.25rem" id="svg" viewbox="0 0 200 200" width="6.25rem" xmlns="http://www.w3.org/2000/svg">
            <linearGradient id="grad">
                <stop class="stop stop--1" offset="0" stop-color="crimson" />
                <stop class="stop stop--2" offset="49%" stop-color="gold" />
                <stop class="stop stop--2" offset="51%" stop-color="gold" />
                <stop class="stop stop--3" offset="100%" stop-color="teal" />
            </linearGradient>

            <pattern height="2" id="pattern" patternUnits="userSpaceOnUse" viewBox="0 0 50 50" width="2">
                <path d="M0,50 50,0" stroke="black" stroke-width="6" />
            </pattern>

            <mask id="mask">
                <rect fill="white" height="100%" width="100%" />
                <rect fill="url(#pattern)" height="100%" width="100%" />
            </mask>

            <g mask="url(#mask)">
                <text dy=".25em" fill="none" stroke="url(#grad)" stroke-width=".25" text-anchor="middle" x="50.7%" y="50.7%">
                    Text
                </text>
                <text dy=".25em" fill="url(#grad)" text-anchor="middle" x="50%" y="50%">
                    Text
                </text>
            </g>
        </svg>
`;

    protected readonly tuiIconClockLarge =
        inject(DomSanitizer).bypassSecurityTrustHtml(tuiIconClockLarge);

    constructor() {
        inject(TuiSvgService).define({
            customTuiIconMaestro: tuiIconMaestro,
            customTuiIconMastercard: tuiIconMastercard,
        });
    }
}
