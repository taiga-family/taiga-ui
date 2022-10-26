interface Suit {
    component: string;
    size: string;
    align: string;
    prefix: string;
    postfix: string;
}

export function tuiMakeInputSuit(
    component: string,
    aligning: Array<'left' | 'right'> = [`left`, `right`],
    suffixes: Array<{prefix: string; postfix: string}> = [{prefix: `$`, postfix: `,25`}],
    sizes: Array<'s' | `l` | `m`> = [`s`, `l`, `m`],
): Suit[] {
    const suits: Suit[] = [];

    for (const align of aligning) {
        for (const size of sizes) {
            for (const {prefix, postfix} of suffixes) {
                suits.push({component, align, size, postfix, prefix});
            }
        }
    }

    return suits;
}

export function tuiMakeItInputs(inputs: Suit[]): void {
    for (const {component, align, size, prefix, postfix} of inputs) {
        const spec = `${component}_${align}_${size}_${prefix}_${postfix}`;

        it(spec, () => {
            cy.viewport(800, 800).tuiVisit(
                `components/${component}/API?tuiMode=null&style.text-align=${align}&tuiTextfieldSize=${size}&prefix=${prefix}&postfix=${postfix}`,
            );

            cy.get(`#demoContent`).tuiScrollIntoView().as(`wrapper`);
            cy.get(`#demoContent`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .first()
                .as(`input`);

            cy.get(`@input`).focus().type(`{selectall}{backspace}`, {force: true});
            cy.get(`@wrapper`).matchImageSnapshot(`${spec}_empty`);

            cy.get(`@input`).focus().type(`{selectall}{backspace}`);
            cy.get(`@input`).focus().type(`1112200011122000{enter}`);
            cy.get(`@wrapper`).matchImageSnapshot(`${spec}_value`);
        });
    }
}
