import { BaseElementObject } from './base.eo';
import { withClickable } from '../mixins';

/**
 * ElementObject для компонента TuiSwitch.
 *
 * Обёртка над <input type="checkbox" tuiSwitch>, инкапсулирующая взаимодействие
 * со свитчем: включение, выключение, проверка состояния.
 *
 * Поддерживает:
 * - role="switch" (для доступности)
 * - опциональные иконки
 * - состояния checked / unchecked
 *
 * Пример использования:
 * const switch = new SwitchEO(page, '[tuiSwitch][automation-id="test-switch"]');
 * await switch.setChecked(true);
 * await expect(switch.host).toBeChecked();
 */
export class SwitchElementObject extends withClickable(BaseElementObject) {
  /**
   * Устанавливает свитч в указанное состояние.
   *
   * Если состояние уже соответствует — клик не выполняется.
   *
   * @param checked `true` — включить, `false` — выключить
   *
   * @example
   * await switch.setChecked(true); // включить
   * await switch.setChecked(false); // выключить
   */
  async setChecked(checked: boolean): Promise<void> {
    const isChecked = await this.host.isChecked();

    if (isChecked !== checked) {
      await this.click();
    }
  }

  /**
   * Проверяет, что элемент имеет корректную ARIA-роль.
   *
   * Ожидается `role="switch"`.
   */

  async hasCorrectRole(): Promise<boolean> {
    const role = await this.host.getAttribute('role');

    return role === 'switch';
  }
}
