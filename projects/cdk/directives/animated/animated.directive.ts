import type {OnDestroy} from '@angular/core';
import {
    afterNextRender,
    ApplicationRef,
    Directive,
    inject,
    ViewContainerRef,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

export const TUI_ENTER = 'tui-enter';
export const TUI_LEAVE = 'tui-leave';

@Directive({
    standalone: true,
    selector: '[tuiAnimated]',
    host: {
        class: TUI_ENTER,
        '(animationend.self)': 'remove()',
        '(animationcancel.self)': 'remove()',
    },
})
export class TuiAnimated implements OnDestroy {
    private readonly el = tuiInjectElement();
    private readonly app = inject(ApplicationRef);

    // @ts-ignore https://github.com/angular/angular/blob/main/packages/core/src/render3/interfaces/view.ts#L56
    private readonly renderer = inject(ViewContainerRef)._hostLView?.[11];

    constructor() {
        if (!this.renderer) {
            return;
        }

        // delegate is used in Angular Animations renderer
        const renderer = this.renderer.delegate || this.renderer;
        const {removeChild, data} = renderer;

        if (data[TUI_LEAVE]) {
            data[TUI_LEAVE].push(this.el);

            return;
        }

        data[TUI_LEAVE] = [this.el];

        afterNextRender(() => {
            this.remove();

            renderer.removeChild = (parent: Node, el: Node, host?: boolean) => {
                const remove = (): void => removeChild.call(renderer, parent, el, host);
                const elements: Element[] = data[TUI_LEAVE];
                const element = elements.find((leave) => el.contains(leave));
                const {length} = element?.getAnimations() || [];

                if (!element) {
                    remove();

                    return;
                }

                elements.splice(elements.indexOf(element), 1);
                element.classList.add(TUI_LEAVE);

                const animations = element.getAnimations();
                const last = animations[animations.length - 1];
                const finish = (): void => {
                    if (parent.contains(el)) {
                        remove();
                        this.app.tick();
                    }
                };

                if (animations.length > length && last) {
                    last.onfinish = finish;
                    last.oncancel = finish;
                } else {
                    remove();
                }
            };
        });
    }

    public ngOnDestroy(): void {
        const data = this.renderer?.data || {[TUI_LEAVE]: []};

        setTimeout(() => {
            data[TUI_LEAVE] = data[TUI_LEAVE].filter((e: Element) => e !== this.el);
        });
    }

    protected remove(): void {
        if (this.el.isConnected && !this.el.getAnimations().length) {
            this.el.classList.remove(TUI_ENTER);
        }
    }
}
