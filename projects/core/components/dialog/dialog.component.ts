import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TUI_IS_MOBILE, TuiDialog, TuiInjectionTokenType} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TUI_PRIMITIVE_TEXTFIELD_OPTIONS} from '@taiga-ui/core/components';
import {TuiAnimationOptions, TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {TUI_ANIMATIONS_DURATION, TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {TuiDialogSize} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';

import {TUI_DIALOG_CLOSE_STREAM, TUI_DIALOG_PROVIDERS} from './dialog.providers';

const REQUIRED_ERROR = new Error(`Required dialog was dismissed`);

@Component({
    selector: `tui-dialog`,
    templateUrl: `./dialog.template.html`,
    styleUrls: [`./dialog.style.less`],
    // So we don't force OnPush on dialog content
    changeDetection: ChangeDetectionStrategy.Default,
    providers: TUI_DIALOG_PROVIDERS,
    animations: [tuiSlideInTop, tuiFadeIn],
})
export class TuiDialogComponent<O, I> {
    private readonly animation = {
        value: ``,
        params: {
            start: `40px`,
            duration: this.duration,
        },
    } as const;

    private readonly fullscreenAnimation = {
        value: ``,
        params: {
            start: `100vh`,
            duration: this.duration,
        },
    } as const;

    constructor(
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiDialogOptions<I>, O>,
        @Inject(TUI_DIALOG_CLOSE_STREAM)
        close$: Observable<unknown>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
        @Inject(TUI_PRIMITIVE_TEXTFIELD_OPTIONS)
        readonly options: TuiInjectionTokenType<typeof TUI_PRIMITIVE_TEXTFIELD_OPTIONS>,
    ) {
        close$.subscribe(() => {
            this.close();
        });
    }

    @HostBinding(`attr.data-size`)
    get size(): TuiDialogSize {
        return this.context.size;
    }

    @HostBinding(`class._centered`)
    get header(): PolymorpheusContent<TuiDialog<TuiDialogOptions<I>, O>> {
        return this.context.header;
    }

    @HostBinding(`@tuiSlideInTop`)
    @HostBinding(`@tuiFadeIn`)
    get slideInTop(): TuiAnimationOptions {
        return this.size === `fullscreen` || this.size === `page` || this.isMobile
            ? this.fullscreenAnimation
            : this.animation;
    }

    close(): void {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
