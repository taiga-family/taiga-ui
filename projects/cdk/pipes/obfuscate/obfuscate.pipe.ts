import type {PipeTransform} from '@angular/core';
import {inject, Pipe} from '@angular/core';
import type {TuiObfuscateOption} from '@taiga-ui/cdk/tokens';
import {TUI_OBFUSCATE_OPTION} from '@taiga-ui/cdk/tokens';
import {tuiObfuscate} from '@taiga-ui/cdk/utils';

@Pipe({
    standalone: true,
    name: 'tuiObfuscate',
})
export class TuiObfuscatePipe implements PipeTransform {
    private readonly option?: TuiObfuscateOption = inject(TUI_OBFUSCATE_OPTION);

    /**
     * Transforms the input value by obfuscating it according to the specified recipe or symbol.
     *
     * @param value The value to be obfuscated should be a string.
     * @param recipe The name of the recipe to use for obfuscation or a single character symbol for custom obfuscation.
     * @returns The obfuscated string.
     * @throws Will throw an error if the specified recipe is not found.
     */
    public transform(value: string, recipe = ''): string {
        if (!value) {
            return value;
        }

        if (!recipe) {
            const obfuscate = this.option?.default;

            return obfuscate ? obfuscate(value) : value;
        }

        const obfuscate = this.option?.recipes?.[recipe];

        if (obfuscate) {
            return obfuscate(value);
        }

        if (recipe.length === 1 && recipe[0]) {
            return tuiObfuscate(value, recipe[0]);
        }

        const availableRecipes = Object.keys(this.option?.recipes ?? {}).sort();

        throw new Error(
            `Obfuscate recipe "${recipe}" not found. Available recipes: [${availableRecipes}]`,
        );
    }
}
