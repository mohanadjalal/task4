import { BaseControl } from './baseControl';

export class ArrayInput extends BaseControl<string> {
  override controlType = 'array';
}
