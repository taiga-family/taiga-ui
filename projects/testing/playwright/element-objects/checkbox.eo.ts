import { BaseElementObject } from './base.eo';
import { withClickable } from '../mixins';

/**
 * ElementObject для компонента TuiCheckbox.
 *
 * Обёртка над <input type="checkbox" tuiCheckbox>, инкапсулирующая взаимодействие
 * с чекбоксом: установка, снятие, проверка состояний.
 *
 * Поддерживает стандартные состояния:
 * - checked
 * - indeterminate
 * - disabled
 *
 * Пример использования:
 * const agreeCheckbox = new CheckboxEO(page, '#agree-checkbox');
 * await agreeCheckbox.setChecked(true);
 * await expect(agreeCheckbox.host).toBeChecked();
 */
export class CheckboxElementObject extends withClickable(BaseElementObject) {
  /**
   * Устанавливает чекбокс в указанное состояние.
   *
   * Если состояние уже соответствует — клик не выполняется.
   *
   * @param checked `true` — включить, `false` — выключить
   *
   * @example
   * await checkbox.setChecked(true); // установить
   * await checkbox.setChecked(false); // снять
   */
  async setChecked(checked: boolean): Promise<void> {
    const isChecked = await this.host.isChecked();
    if (isChecked !== checked) {
      await this.click();
    }
  }

  /**
   * Возвращает текст лейбла, связанного с чекбоксом (если есть).
   *
   * Ищет <label>, содержащий этот чекбокс.
   */
  async getLabel(): Promise<string | null> {
    const label = this.page.locator('label', { has: this.host });
    const text = await label.textContent();
    return text?.trim() || null;
  }
}
