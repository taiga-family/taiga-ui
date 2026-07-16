import { Page, Locator } from '@playwright/test';

/**
 * Базовый класс для всех Element Object (EO).
 *
 * Предоставляет единый интерфейс для взаимодействия с компонентами:
 * - `host` — корневой локатор компонента
 * - `page` — доступ к странице для сложных сценариев (например, порталы)
 * - `selector` — исходный селектор
 *
 * Используется как основа для композиции через миксины.
 *
 * @example
 * class ButtonEO extends withClickable(BaseElementObject) {}
 */
export class BaseElementObject {
  constructor(
    /**
     * Экземпляр страницы Playwright
     */
    protected readonly page: Page,
    /**
     * Селектор компонента (например, '[tuiSelect]', 'input[type="radio"][tuiRadio]')
     */
    protected readonly selector: string,
	/**
	 * Порядковый номер элемента, если селектор возвращает несколько элементов (например, для tuiRadio, которые редко используются по одному)
	 */
	protected readonly orderNumber: number = 0,
  ) {}

  /**
   * Основной локатор компонента — единая точка входа.
   *
   * Все действия и проверки должны начинаться с `host`.
   *
   * @example
   * await this.host.click();
   * await expect(this.host).toBeVisible();
   */
  get host(): Locator {
    return this.page.locator(this.selector).nth(this.orderNumber);
  }
}