import {waitAnimation} from './wait-animation';

export function waitKitControlError(containerSelector: string) {
    waitAnimation(cy.get(containerSelector).find('[automation-id="tui-error__text"]'));
}
