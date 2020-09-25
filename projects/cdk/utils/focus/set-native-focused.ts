import {isEdge, isIE} from '@taiga-ui/cdk/utils/browser';

let preventScrollPolyfilled = false;

// @bad TODO: Fix polyfill and add tests, consider removing focused attribute
/**
 * Focuses or blurs and element
 *
 * @param element native element
 * @param focused boolean focused state
 * @param preventScroll optional flag to prevent native scroll to the element
 */
export function setNativeFocused(
    element: HTMLOrSVGElement,
    focused: boolean = true,
    preventScroll: boolean = false,
) {
    if (
        !preventScrollPolyfilled &&
        focused &&
        preventScroll &&
        typeof document !== 'undefined'
    ) {
        polyfillPreventScroll(document);
    }

    if (focused) {
        element.focus({preventScroll});
    } else {
        element.blur();
    }
}

function polyfillPreventScroll(documentRef: Document): void {
    preventScrollPolyfilled = true;

    let supported = false;

    documentRef.createElement('div').focus({
        get preventScroll() {
            supported = true;

            return false;
        },
    });

    if (supported) {
        return;
    }

    type FocusMethod = (
        this: HTMLElement | SVGElement,
        focusOptions?: FocusOptions,
    ) => void;

    function createFocusPolyfill(nativeMethod: FocusMethod): FocusMethod {
        return function (
            this: HTMLElement | SVGElement,
            focusOptions: FocusOptions = {},
        ) {
            const {
                style,
                style: {position},
            } = this;

            if (!focusOptions.preventScroll || position === 'fixed') {
                nativeMethod.call(this, focusOptions);

                return;
            }

            const scrollHierarchy: {
                element: Element;
                scrollLeft: number;
                scrollTop: number;
            }[] = [];
            let parent = this.parentElement;

            while (parent) {
                scrollHierarchy.push({
                    element: parent,
                    scrollLeft: parent.scrollLeft,
                    scrollTop: parent.scrollTop,
                });
                parent = parent.parentElement;
            }

            const restoreScroll = (event?: Event) => {
                style.position = position;
                scrollHierarchy.forEach(({element, scrollLeft, scrollTop}) => {
                    if (element.scrollLeft !== scrollLeft) {
                        element.scrollLeft = scrollLeft;
                    }

                    if (element.scrollTop !== scrollTop) {
                        element.scrollTop = scrollTop;
                    }
                });

                if (event) {
                    this.removeEventListener('focus', restoreScroll);
                }
            };

            const userAgent =
                (documentRef.defaultView &&
                    documentRef.defaultView.navigator &&
                    documentRef.defaultView.navigator.userAgent) ||
                '';

            if (isIE(userAgent) || isEdge(userAgent)) {
                this.addEventListener('focus', restoreScroll);
            }

            nativeMethod.call(this, focusOptions);
            restoreScroll();

            if (documentRef.activeElement !== this) {
                this.removeEventListener('focus', restoreScroll);
            }
        };
    }

    HTMLElement.prototype.focus = createFocusPolyfill(HTMLElement.prototype.focus);
    SVGElement.prototype.focus = createFocusPolyfill(SVGElement.prototype.focus);
}
