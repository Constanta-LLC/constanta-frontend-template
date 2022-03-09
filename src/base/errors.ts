export class ApplicationError extends Error {
  private readonly __proto__: unknown;

  constructor(message?: string) {
    super(message);

    const actualProto = new.target.prototype;

    /**
     * Встроенный класс Error ломает цепочку наследований.
     * При вызове создает новый объект ошибки, отсюда и ломаются все проверки на instanceof.
     *
     * Чтобы избежать этого, "прибиваем" прототип руками.
     */

    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
  }

  public [Symbol.toPrimitive](hint: 'string' | 'number' | 'default'): unknown {
    if (hint === 'string') {
      return `ERROR: ${this.name} - ${this.message}`;
    }

    return true;
  }
}

/**
 * @author Teodor_Dre <swen295@gmail.com>
 *
 * @description
 *  Happens in very rare moments.
 *  When this error occurs, normal working of the application is impossible
 *
 *  @property {string} name - Error name
 */
export class CriticalError extends ApplicationError {
  public readonly name = 'CriticalError';
}

/**
 /**
 * @author Teodor_Dre <swen295@gmail.com>
 *
 * @description
 *  Handle unexpected error
 *
 * @param {unknown} error
 */
export function onUnexpectedError(error: unknown): void {
  return console.log(error);
}
