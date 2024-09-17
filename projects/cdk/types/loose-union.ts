/**
 * @example
 * type Color = 'primary' | 'secondary' | string;
 *
 * Your brand has some known colors, like `primary` and `secondary`.
 * But you also want to make sure that users can specify any color they want.
 *
 * @Input() color: Color = '';
 *
 * <my-icon color="red" />
 *
 * But there's an issue. We aren't getting `color`
 * suggestions when we use the `MyIcon` component.
 * If we try to autocomplete the `color` prop, we get no suggestions.
 * Ideally, we want `primary` and `secondary` to be part of that list.
 * How do we manage that?
 *
 * This works because of a quirk of the TypeScript compiler.
 * When you create a union between a string literal type and `string`,
 * TypeScript will eagerly widen the type to `string`.
 *
 * But if we change type to
 * type Color = 'primary' | 'secondary' | (string & {});
 *
 * TypeScript has already forgotten that `"primary"` and `"secondary"`
 * were ever part of the type. But by intersecting `string` with
 * an empty object, we trick TypeScript into retaining the string
 * literal types for a bit longer.
 *
 * This might feel pretty fragile to you. This doesn't seem like
 * intended behavior from TypeScript. Well, the team actually
 * know about this trick. They test against it. And someday, they may make
 * it so that a plain `string` type will just work.
 * But until then, keep this in mind.
 */
export type TuiLooseUnion<U> =
    | U
    | (U extends string
          ? Record<never, never> & string
          : U extends number
            ? Record<never, never> & number
            : U extends symbol
              ? Record<never, never> & symbol
              : U extends bigint
                ? Record<never, never> & bigint
                : never);
