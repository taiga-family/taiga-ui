import {Component} from '@angular/core';
import {TUI_SVG_SRC_PROCESSOR} from '@taiga-ui/core';

export function icons8SourceProcessor(): (src: string) => string {
    return (src: string) => {
        const myCustomPrefix = 'icons8::';

        return src.startsWith(myCustomPrefix)
            ? `assets/icons8/${src.replace(myCustomPrefix, '')}.svg`
            : src;
    };
}

@Component({
    selector: 'customization-icons-example',
    templateUrl: './customization-icons.template.html',
    styleUrls: ['./customization-icons.style.less'],
    providers: [
        {
            provide: TUI_SVG_SRC_PROCESSOR,
            useFactory: icons8SourceProcessor,
        },
    ],
})
export class IconsCustomizationComponent {}
