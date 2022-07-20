export class BaseControl<T> {
  value: T | undefined;
  key: string;
  label: string;
  required: boolean;
  order: number;
  controlType: string;
  type: string;
  disable: boolean;
  options: { key: string; value: string }[];
  validators: {};

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      required?: boolean;
      order?: number;
      controlType?: string;
      type?: string;
      disable?: boolean;
      options?: { key: string; value: string }[];
      validators?: {};
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.type = options.type || '';
    this.disable = !!options.disable;
    this.options = options.options || [];
    this.validators = options.validators || {};
  }
}
