import {Component, inject, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk';
import {
    TuiButtonDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
} from '@taiga-ui/core';
import {TuiAvatarComponent} from '@taiga-ui/kit';
import type {TuiSheet, TuiSheetOptions} from '@taiga-ui/legacy';
import {TUI_SHEET_DEFAULT_OPTIONS, TuiSheetModule} from '@taiga-ui/legacy';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiNotificationComponent,
        TuiLinkDirective,
        RouterLink,
        TuiButtonDirective,
        TuiAvatarComponent,
        TuiSheetModule,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class PageComponent {
    @ViewChild('template')
    protected readonly templateRef: PolymorpheusContent<TuiSheet<unknown>>;

    protected readonly docRoutes = DemoRoute;
    protected closeable = TUI_SHEET_DEFAULT_OPTIONS.closeable;
    protected image = TUI_SHEET_DEFAULT_OPTIONS.image;
    protected imageSlide = TUI_SHEET_DEFAULT_OPTIONS.imageSlide;
    protected initial = TUI_SHEET_DEFAULT_OPTIONS.initial;
    protected overlay = TUI_SHEET_DEFAULT_OPTIONS.overlay;
    protected stops = TUI_SHEET_DEFAULT_OPTIONS.stops;

    protected open = false;

    protected readonly imageVariants = [
        this.image,
        '/assets/images/avatar.jpg',
        'Template',
    ];

    protected readonly stopsVariants = [this.stops, ['100px'], ['10rem', '20rem']];

    protected readonly isMobile = inject(TUI_IS_MOBILE);

    protected get computedImage(): PolymorpheusContent<TuiSheet<unknown>> {
        return this.image === 'Template' ? this.templateRef : this.image;
    }

    protected get options(): Partial<TuiSheetOptions> {
        return {
            closeable: this.closeable,
            image: this.computedImage,
            imageSlide: this.imageSlide,
            stops: this.stops,
            initial: this.initial,
            overlay: this.overlay,
        };
    }

    protected toggle(): void {
        this.open = !this.open;
    }
}
