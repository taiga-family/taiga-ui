import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_SANITIZER, tuiSvgOptionsProvider} from '@taiga-ui/core';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';

@Component({
    selector: 'customization-icons-example',
    templateUrl: './customization-icons.template.html',
    styleUrls: ['./customization-icons.style.less'],
    providers: [
        /**
         * @note:
         * required for rendering inline svg sources
         */
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
        tuiSvgOptionsProvider({
            srcProcessor: src => {
                const myCustomPrefix = 'icons8::';

                return String(src).startsWith(myCustomPrefix)
                    ? `assets/icons8/${String(src).replace(myCustomPrefix, '')}.svg`
                    : src;
            },
        }),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsCustomizationComponent {}
