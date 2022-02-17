import {DEFAULT_TIMEOUT_BEFORE_ACTION as RETRY} from './shared.entities';

const getNotLoadedRequests = (alias: string) =>
    cy
        .get<{state: string}[]>(`${alias}.all`)
        .then(reqs => reqs.filter(req => req.state !== 'Complete'));

export const waitAllRequests = (alias: string) => {
    getNotLoadedRequests(alias)
        .then(reqs => (reqs.length ? cy.wait(alias) : cy.wait(RETRY)))
        .then(() => getNotLoadedRequests(alias))
        .then(reqs => {
            return reqs.length
                ? waitAllRequests(alias)
                : cy
                      .wait(RETRY)
                      .then(() => getNotLoadedRequests(alias))
                      .then(reqs =>
                          reqs.length ? waitAllRequests(alias) : Promise.resolve(),
                      );
        });
};
