declare global {
    namespace Cypress {
        // tslint:disable-next-line
        interface Chainable {
            waitScrollbarStableState(scrollSelector: string): void;
        }
    }
}

export function addKitCommands() {
    Cypress.Commands.add('waitScrollbarStableState', (scrollSelector: string) => {
        const timeout = Cypress.config('defaultCommandTimeout');

        cy.get(scrollSelector).then($scroll => {
            return new Cypress.Promise((resolve, reject) => {
                let scrollIsStable = false;
                let prevState = {
                    top: $scroll.position().top,
                    height: $scroll.height(),
                };

                const interval = setInterval(() => {
                    const newTopPosition = $scroll.position().top;
                    const newHeight = $scroll.height();

                    if (
                        newTopPosition === prevState.top &&
                        newHeight === prevState.height
                    ) {
                        resolve();
                        clearInterval(interval);
                        scrollIsStable = true;
                    } else {
                        prevState = {
                            top: newTopPosition,
                            height: newHeight,
                        };
                    }
                }, 200);

                setTimeout(() => {
                    if (scrollIsStable) {
                        return;
                    }

                    clearInterval(interval);
                    reject(new Error(`Timed out waiting for scrollbar`));
                }, timeout);
            });
        });
    });
}
