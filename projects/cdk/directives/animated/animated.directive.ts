import {
    afterNextRender,
    ApplicationRef,
    Directive,
    inject,
    type OnDestroy,
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
    // @ts-ignore https://github.com/angular/angular/blob/main/packages/core/src/render3/interfaces/view.ts#L56
    private readonly renderer = inject(ViewContainerRef)._hostLView?.[11];
    private readonly el = tuiInjectElement();
    private readonly app = inject(ApplicationRef);

    constructor() {
        afterNextRender(() => this.remove());

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
            renderer.removeChild = (parent: Node | null, el: Node, host?: boolean) => {
                const remove = (): void => removeChild.call(renderer, parent, el, host);
                const elements: Element[] = data[TUI_LEAVE];
                const element = elements.find((leave) => el.contains(leave));

                if (!element) {
                    remove();

                    return;
                }

                element.classList.remove(TUI_ENTER);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                const {length} = element.getAnimations?.() || [];

                element.classList.add(TUI_LEAVE);

                // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                const animations = element.getAnimations?.() ?? [];
                const last = animations[animations.length - 1];
                const finish = (): void => {
                    if (!parent || parent.contains(el)) {
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
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        if (this.el.isConnected && !this.el.getAnimations?.().length) {
            this.el.classList.remove(TUI_ENTER);
        }
    }
}
