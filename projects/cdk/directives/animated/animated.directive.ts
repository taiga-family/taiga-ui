import {isPlatformBrowser} from '@angular/common';
import {
    afterNextRender,
    Directive,
    inject,
    PLATFORM_ID,
    type Renderer2,
    ViewContainerRef,
} from '@angular/core';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';

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
export class TuiAnimated {
    // @ts-ignore https://github.com/angular/angular/blob/main/packages/core/src/render3/interfaces/view.ts#L56
    private readonly renderer = inject(ViewContainerRef)._hostLView?.[11];
    private readonly el = tuiInjectElement();

    constructor() {
        afterNextRender(() => this.remove());

        if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) {
            // delegate is used in Angular Animations renderer
            wrap(this.renderer.delegate || this.renderer);
        }
    }

    protected remove(): void {
        if (this.el.isConnected && !this.el.getAnimations?.().length) {
            this.el.classList.remove(TUI_ENTER);
        }
    }
}

function wrap(renderer: Renderer2): void {
    if (renderer.data[TUI_LEAVE]) {
        return;
    }

    const {removeChild} = renderer;

    renderer.data[TUI_LEAVE] = true;

    renderer.removeChild = (parent: Node, el: Node, host?: boolean): void => {
        if (!tuiIsElement(el)) {
            removeChild.call(renderer, parent, el, host);

            return;
        }

        el.classList.remove(TUI_ENTER);

        const {length} = el.getAnimations?.() || [];

        el.classList.add(TUI_LEAVE);

        const animations = el.getAnimations?.() ?? [];
        const last = animations[animations.length - 1];
        const finish = (): void => {
            if (!parent || parent.contains(el)) {
                removeChild.call(renderer, parent, el, host);
            }
        };

        if (animations.length > length && last) {
            last.onfinish = finish;
            last.oncancel = finish;
        } else {
            finish();
        }
    };
}
