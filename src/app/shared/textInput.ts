import { BaseControl } from './baseControl';

export class TextInput extends BaseControl<string> {
  override controlType = 'text';
}
