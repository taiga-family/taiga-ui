import {Component} from '@angular/core';
import {TUI_SANITIZER} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    selector: `inline-svg-example`,
    template: `
        <tui-svg
            class="example"
            [src]="svg"
        ></tui-svg>
    `,
    styleUrls: [`./inline-svg.style.less`],
    providers: [
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export class InlineSvgExampleComponent {
    svg = `
        <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 200 200"
     preserveAspectRatio="xMidYMid slice"
     id="svg">

    <linearGradient id="grad">
        <stop class="stop stop--1"
              stop-color="crimson"
              offset="0"></stop>
        <stop class="stop stop--2"
              stop-color="gold"
              offset="49%"></stop>
        <stop class="stop stop--2"
              stop-color="gold"
              offset="51%"></stop>
        <stop class="stop stop--3"
              stop-color="teal"
              offset="100%"></stop>
    </linearGradient>

    <pattern id="pattern"
              viewBox="0 0 50 50"
              width="2" height="2"
             patternUnits="userSpaceOnUse">
        <path stroke="black"
              stroke-width="6"
              d="M0,50 50,0
                 "></path>
    </pattern>

    <mask id="mask">
        <rect width="100%" height="100%"
          fill="white">
        </rect>
        <rect width="100%" height="100%"
          fill="url(#pattern)">
        </rect>
    </mask>

    <g mask="url(#mask)">
        <text x="50.7%" y="50.7%" dy=".25em"
          text-anchor="middle"
          fill="none"
          stroke="url(#grad)"
          stroke-width=".25"
          >Text</text>
       <text x="50%" y="50%" dy=".25em"
          text-anchor="middle"
          fill="url(#grad)"
          >Text</text>
    </g>
</svg>`;
}
