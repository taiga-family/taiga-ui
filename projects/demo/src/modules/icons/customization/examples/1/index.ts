import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSafeHtml} from '@taiga-ui/cdk';
import {TUI_SANITIZER, tuiSvgSrcInterceptors} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    selector: 'tui-icons-customization-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
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
                ? `assets/icons8/${String(src).replace('icons8::', '')}.svg`
                : src,
        ),
    ],
    changeDetection,
})
export class TuiIconsCustomizationExample1 {}
