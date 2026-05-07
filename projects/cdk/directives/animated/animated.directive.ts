import {isPlatformBrowser} from '@angular/common';
import {
    afterNextRender,
    DestroyRef,
    Directive,
    inject,
    PLATFORM_ID,
    type Renderer2,
    ViewContainerRef,
} from '@angular/core';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiInjectElement, tuiIsElement} from '@taiga-ui/cdk/utils/dom';

export const TUI_ENTER = 'tui-enter';
export const TUI_LEAVE = 'tui-leave';

const TUI_LEAVE_KEY = `${TUI_LEAVE}_${TUI_VERSION.split('.')[0]}`;

@Directive({
    selector: '[tuiAnimated]',
    host: {
        class: TUI_ENTER,
        '(animationcancel.self)': 'remove()',
        '(animationend.self)': 'remove()',
    },
})
export class TuiAnimated {
    // @ts-ignore https://github.com/angular/angular/blob/main/packages/core/src/render3/interfaces/view.ts#L56
    private readonly renderer = inject(ViewContainerRef)._hostLView?.[11];
    private readonly el = tuiInjectElement();
    private readonly destroyRef = inject(DestroyRef);
    private destroyed = false;

    constructor() {
        afterNextRender(() => this.remove());

        if (this.renderer && isPlatformBrowser(inject(PLATFORM_ID))) {
            // AnimationRenderer doesn't delegate removeChild, so we rely on onDestroy callback
            if ('engine' in this.renderer) {
                this.destroyRef.onDestroy(() => {
                    this.destroyed = true;
                    animateRemoval(this.el);
                });
                return;
            }

            wrap(this.renderer.delegate || this.renderer);
        }
    }

    protected remove(): void {
        if (!this.destroyed && this.el.isConnected && !this.el.getAnimations?.().length) {
            this.el.classList.remove(TUI_ENTER);
        }
    }
}

/**
 * Wraps renderer.removeChild to handle leave animation for elements
 * Used when standard Renderer2 is active (no Angular Animations)
 */
function wrap(renderer: Renderer2): void {
    if (renderer.data[TUI_LEAVE_KEY]) {
        return;
    }

    const {removeChild} = renderer;

    renderer.data[TUI_LEAVE_KEY] = true;
    renderer.removeChild = (parent: Node, el: Node, host?: boolean): void => {
        if (!tuiIsElement(el)) {
            removeChild.call(renderer, parent, el, host);
            return;
        }

        animateRemoval(el, () => {
            if (!parent || parent.contains(el)) {
                removeChild.call(renderer, parent, el, host);
            }
        });
    };
}

/**
 * Handles the leave animation lifecycle:
 * 1. Removes TUI_ENTER class
 * 2. Adds TUI_LEAVE class
 * 3. Waits for CSS animations to complete
 * 4. Removes element from DOM
 */
function animateRemoval(el: Element, onComplete?: () => void): void {
    el.classList.remove(TUI_ENTER);
    el.classList.add(TUI_LEAVE);

    requestAnimationFrame(() => {
        const animations = el.getAnimations?.() ?? [];
        const last = animations[animations.length - 1];

        const finish = (): void => {
            el.remove();
            onComplete?.();
        };

        if (animations.length && last) {
            last.onfinish = finish;
            last.oncancel = finish;
        } else {
            finish();
        }
    });
}
