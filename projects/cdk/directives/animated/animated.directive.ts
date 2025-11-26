import {isPlatformServer} from '@angular/common';
import {
    afterNextRender,
    Directive,
    inject,
    type OnDestroy,
    PLATFORM_ID,
    type Renderer2,
    ViewContainerRef,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export const TUI_ENTER = 'tui-enter';
export const TUI_LEAVE = 'tui-leave';

@Directive({
    selector: '[tuiAnimated]',
    host: {
        class: TUI_ENTER,
        '(animationend.self)': 'remove()',
        '(animationcancel.self)': 'remove()',
    },
})
export class TuiAnimated implements OnDestroy {
    // @ts-ignore https://github.com/angular/angular/blob/main/packages/core/src/render3/interfaces/view.ts#L56
    private readonly renderer = inject(ViewContainerRef)._hostLView?.[11];
    private readonly el = tuiInjectElement();

    constructor() {
        afterNextRender(() => this.remove());

        if (!this.renderer || isPlatformServer(inject(PLATFORM_ID))) {
            return;
        }

        // delegate is used in Angular Animations renderer
        const renderer = this.renderer.delegate || this.renderer;

        if (renderer.data[TUI_LEAVE]) {
            renderer.data[TUI_LEAVE].push(this.el);
        } else {
            renderer.data[TUI_LEAVE] = [this.el];
            renderer.removeChild = wrap(renderer);
        }
    }

    public ngOnDestroy(): void {
        const data = this.renderer?.data || {[TUI_LEAVE]: []};

        setTimeout(() => {
            data[TUI_LEAVE] = data[TUI_LEAVE]?.filter((e: Element) => e !== this.el);
        });
    }

    protected remove(): void {
        if (this.el.isConnected && !this.el.getAnimations?.().length) {
            this.el.classList.remove(TUI_ENTER);
        }
    }
}

function wrap(renderer: Renderer2): Renderer2['removeChild'] {
    const {removeChild} = renderer;

    return (parent: Node, el: Node, host?: boolean): void => {
        const remove = (): void => removeChild.call(renderer, parent, el, host);
        const elements: Element[] = renderer.data[TUI_LEAVE];
        const element = elements.find((leave) => el.contains(leave));

        if (!element) {
            remove();

            return;
        }

        element.classList.remove(TUI_ENTER);

        const {length} = element.getAnimations?.() || [];

        element.classList.add(TUI_LEAVE);

        const animations = element.getAnimations?.() ?? [];
        const last = animations[animations.length - 1];
        const finish = (): void => {
            if (!parent || parent.contains(el)) {
                remove();
            }
        };

        if (animations.length > length && last) {
            last.onfinish = finish;
            last.oncancel = finish;
        } else {
            remove();
        }
    };
}
