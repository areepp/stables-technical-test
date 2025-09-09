import { maskitoNumberOptionsGenerator } from '@maskito/kit'

export const thousandSeparatorMaskOptions = maskitoNumberOptionsGenerator({
  thousandSeparator: ',',
  precision: 2,
  decimalSeparator: '.',
})
