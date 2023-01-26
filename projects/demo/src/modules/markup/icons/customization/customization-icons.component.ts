import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TUI_SANITIZER, TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core';
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
        {
            provide: TUI_SVG_SRC_PROCESSOR,
            useFactory: () => {
                return (src: string): string => {
                    const myCustomPrefix = 'icons8::';

                    return src.startsWith(myCustomPrefix)
                        ? // load svg as inline source
                          `assets/icons8/${src.replace(myCustomPrefix, '')}.svg`
                        : src;
                };
            },
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsCustomizationComponent {}
