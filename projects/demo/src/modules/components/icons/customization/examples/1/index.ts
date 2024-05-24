import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiSafeHtml} from '@taiga-ui/cdk';
import {TUI_SANITIZER, TuiSvgComponent, tuiSvgSrcInterceptors} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    standalone: true,
    imports: [TuiSvgComponent],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    providers: [
        /**
         * @note:
         * required for rendering inline svg sources
         */
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        /**
         * @note:
         * Be careful, component has its own injector which doesn't inherit providers from parent injector.
         * https://angular.io/guide/providers#providing-services-in-modules-versus-components
         *
         * If you want to keep previous interceptors then best to keep it global,
         * provide all necessary interceptors at the top level of your app (e.g. AppModule).
         */
        tuiSvgSrcInterceptors((src: TuiSafeHtml) =>
            String(src).startsWith('icons8::')
                ? `assets/icons/${String(src).replace('icons8::', '')}.svg`
                : src,
        ),
    ],
})
export default class ExampleComponent {}
