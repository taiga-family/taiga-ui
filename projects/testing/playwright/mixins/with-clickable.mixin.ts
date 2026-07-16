import { BaseElementObject } from '../element-objects/base.eo';
import { MixinConstructor } from '../types';

/**
 * Миксин, добавляющий базовую кликабельность.
 *
 * Позволяет:
 * - Выполнить клик по host-элементу
 *
 * Использование:
 * - Для компонентов, которые реагируют на клик: кнопки, чекбоксы, радио, иконки и т.д.
 * - Может быть унаследован и переопределён при необходимости.
 *
 * @example
 * class ButtonEO extends withClickable(BaseElementObject) {
 *   // Теперь имеет .click()
 * }
 *
 * // Использование в тесте
 * await button.click();
 * await expect(someState).toBeVisible();
 *
 * @example
 * class CheckboxElementObject extends withClickable(BaseElementObject) {
 *   async check() {
 *     if (!(await this.isChecked())) {
 *       await this.click();
 *     }
 *   }
 * }
 *
 */
export function withClickable<T extends MixinConstructor<BaseElementObject>>(Base: T) {
  return class extends Base {
    /**
     * Выполняет клик по host-элементу.
     *
     * Использует стандартный .click() из Playwright,
     * который включает прокрутку, ожидание видимости и активности.
     *
     * Для кликов по вложенным элементам (например, иконке внутри кнопки)
     * рекомендуется создавать отдельный метод в конкретном EO.
     */
    async click(): Promise<void> {
      await this.host.click();
    }
  };
}