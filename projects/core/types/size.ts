/**
 * Various sizes for components
 *
 * 'xxs' - extra extra small
 * 'xs' - extra small
 * 's' - small
 * 'm' - medium (typically default)
 * 'l' - large
 * 'xl' - extra large
 * 'xxl' - extra extra large
 */

export type TuiSizeM = 'm';

export type TuiSizeS = 's' | TuiSizeM;

export type TuiSizeL = TuiSizeM | 'l';

export type TuiSizeXS = 'xs' | TuiSizeS;

export type TuiSizeXXS = 'xxs' | TuiSizeXS;

export type TuiSizeXL = TuiSizeL | 'xl';

export type TuiSizeXXL = TuiSizeXL | 'xxl';
