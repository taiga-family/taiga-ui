import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import {TUI_IS_MOBILE, TuiDialog} from '@taiga-ui/cdk';
import {tuiFadeIn, tuiSlideInTop} from '@taiga-ui/core/animations';
import {TuiAnimationOptions, TuiDialogOptions} from '@taiga-ui/core/interfaces';
import {TUI_CLOSE_WORD} from '@taiga-ui/core/tokens';
import {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {TUI_DIALOG_CLOSE_STREAM, TUI_DIALOG_PROVIDERS} from './dialog.providers';

const SMALL_DIALOGS_ANIMATION = {value: '', params: {start: '40px'}};
const FULLSCREEN_DIALOGS_ANIMATION = {value: '', params: {start: '100vh'}};
const REQUIRED_ERROR = new Error('Required dialog was dismissed');

// @dynamic
@Component({
    selector: 'tui-dialog',
    templateUrl: './dialog.template.html',
    styleUrls: ['./dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_DIALOG_PROVIDERS,
    animations: [tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'true',
    },
})
export class TuiDialogComponent<O, I> {
    constructor(
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(POLYMORPHEUS_CONTEXT)
        readonly context: TuiDialog<TuiDialogOptions<I>, O>,
        @Inject(TUI_DIALOG_CLOSE_STREAM)
        close$: Observable<unknown>,
        @Inject(TUI_CLOSE_WORD) readonly closeWord$: Observable<string>,
    ) {
        close$.pipe(filter(() => this.context.dismissible)).subscribe(() => {
            this.close();
        });
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeS | TuiSizeL | 'fullscreen' {
        return this.context.size;
    }

    @HostBinding('class._centered')
    get header(): PolymorpheusContent {
        return this.context.header;
    }

    get h(): 'h3' | 'h4' | 'h5' {
        if (this.isMobile) {
            return 'h5';
        }

        switch (this.size) {
            case 's':
                return 'h5';
            case 'm':
                return 'h4';
            default:
                return 'h3';
        }
    }

    @HostBinding('@tuiSlideInTop')
    get slideInTop(): TuiAnimationOptions {
        return this.size === 'fullscreen' || this.isMobile
            ? FULLSCREEN_DIALOGS_ANIMATION
            : SMALL_DIALOGS_ANIMATION;
    }

    close() {
        if (this.context.required) {
            this.context.$implicit.error(REQUIRED_ERROR);
        } else {
            this.context.$implicit.complete();
        }
    }
}
