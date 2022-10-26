interface Suit {
    component: string;
    size: string;
    align: string;
    prefix: string;
    postfix: string;
}

export function tuiMakeInputSuit(names: string[]): Suit[] {
    const suits: Suit[] = [];

    for (const component of names) {
        for (const align of [`left`, `right`]) {
            for (const size of [`s`, `l`, `m`]) {
                for (const {prefix, postfix} of [
                    {prefix: ``, postfix: ``},
                    {prefix: `$`, postfix: ``},
                    {prefix: ``, postfix: `,25`},
                    {prefix: `$`, postfix: `,25`},
                ]) {
                    suits.push({component, align, size, postfix, prefix});
                }
            }
        }
    }

    return suits;
}

export function tuiMakeItInputs(inputs: Suit[]): void {
    for (const {component, align, size, prefix, postfix} of inputs) {
        const spec = `${component}_${align}_${size}_${prefix}_${postfix}`;

        it(spec, () => {
            cy.tuiVisit(
                `components/${component}/API?tuiMode=null&style.text-align=${align}&tuiTextfieldSize=${size}&prefix=${prefix}&postfix=${postfix}`,
            );

            cy.get(`#demoContent`).tuiScrollIntoView().as(`wrapper`);
            cy.get(`#demoContent`).find(`input`).first().as(`input`);

            cy.get(`@input`).focus().type(`{selectall}{backspace}`);
            cy.get(`@wrapper`).matchImageSnapshot(`${spec}_empty`);

            cy.get(`@input`).focus().type(`{selectall}{backspace}`);
            cy.get(`@input`).focus().type(`1112200011122000{enter}`);
            cy.get(`@wrapper`).matchImageSnapshot(`${spec}_value`);
        });
    }
}
