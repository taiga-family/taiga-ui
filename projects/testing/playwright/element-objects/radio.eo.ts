import { BaseElementObject } from './base.eo';
import { withClickable } from '../mixins';

/**
 * ElementObject для компонента TuiRadio.
 *
 * Обёртка над <input type="radio" tuiRadio>, инкапсулирующая взаимодействие
 * с радиокнопкой: выбор, проверка состояния.
 *
 * Пример использования:
 * const radio = new RadioEO(page, '#user-type-radio[value="legal"]');
 * await radio.select();
 * await expect(radio.host).toBeChecked();
 */
export class RadioElementObject extends withClickable(BaseElementObject) {
  /**
   * Выбирает радиокнопку (если ещё не выбрана)
   */
  async select(): Promise<void> {
    if (!(await this.host.isChecked())) {
      await this.click();
    }
  }

  /**
   * Возвращает текст рядом с радиокнопкой (если есть label)
   */
  async getLabel(): Promise<string | null> {
    const label = this.page.locator('label', { has: this.host });
    const text = await label.textContent();

    return text?.trim() || null;
  }
}
