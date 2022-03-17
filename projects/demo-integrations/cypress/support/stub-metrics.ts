export const stubMetrics = () => {
    cy.intercept({hostname: 'mc.yandex.ru'}, {});
};
