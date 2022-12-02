function nextTabbable(
    $referenceElement: JQuery<HTMLElement>,
    direction = `forward`,
): JQuery<HTMLElement> {
    if (!(direction === `forward` || direction === `backward`)) {
        throw new Error(`Expected direction to be forward or backward`);
    }

    const stack = [];
    let element;

    const siblingProp =
        direction === `forward` ? `nextElementSibling` : `previousElementSibling`;

    element = $referenceElement.get(0);

    while (element) {
        let sibling = element[siblingProp];

        while (sibling) {
            stack.unshift(sibling);
            sibling = sibling[siblingProp];
        }

        element = element.parentElement;
    }

    while (stack.length > 0) {
        element = stack.pop();

        const $candidateElement = $referenceElement.constructor(element);

        if (isTabbable($candidateElement)) {
            return $candidateElement;
        }

        let children = Array.from(element?.children || []);

        if (direction === `forward`) {
            children = children.reverse();
        }

        children.forEach(child => {
            stack.push(child);
        });
    }

    return $referenceElement.constructor();
}

function isTabbable($element: JQuery<HTMLElement>): boolean {
    const tabIndex = $element.attr(`tabindex`);

    return (!tabIndex || parseInt(tabIndex, 10) >= 0) && isFocusable($element);
}

const DISABLEMENT_ELEMENTS = [
    `input`,
    `button`,
    `select`,
    `textarea`,
    `button`,
    `object`,
];

function isFocusable($element: JQuery<HTMLElement>): boolean {
    const nodeName = $element.prop(`nodeName`)?.toLowerCase() || ``;

    return (
        (nodeName === `a` ||
            !!$element.attr(`tabindex`) ||
            (DISABLEMENT_ELEMENTS.includes(nodeName) && $element.is(`:enabled`))) &&
        $element.is(`:visible`)
    );
}

export function tuiTab(
    $subject: Cypress.PrevSubjectMap<void>[Cypress.PrevSubject],
    direction: 'backward' | 'forward',
): Cypress.Chainable<JQuery<HTMLElement>> {
    const thenable: Cypress.Chainable = $subject
        ? cy.wrap($subject, {log: false})
        : cy.focused({log: false});

    return thenable.then($el => nextTabbable($el, direction)).focus({log: false});
}
