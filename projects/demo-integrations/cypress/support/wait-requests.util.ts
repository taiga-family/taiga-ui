import {DEFAULT_TIMEOUT_BEFORE_ACTION} from './shared.entities';

const getNotLoadedRequests = (alias: string): Cypress.Chainable =>
    cy
        .get<Array<{state: string}>>(`${alias}.all`)
        .then(reqs => reqs.filter(req => req.state !== 'Complete'));

/** TODO delete me after we make sure that {@link tuiWaitAllIconsInside} actually works as expected */
export const waitAllRequests = (alias: string): void => {
    getNotLoadedRequests(alias)
        .then(reqs => {
            return reqs.length ? cy.wait(alias) : cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION);
        })
        .then(() => getNotLoadedRequests(alias))
        .then(reqs => {
            return reqs.length
                ? waitAllRequests(alias)
                : cy
                      .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                      .then(() => getNotLoadedRequests(alias))
                      .then(reqs =>
                          reqs.length ? waitAllRequests(alias) : Promise.resolve(),
                      );
        });
};
