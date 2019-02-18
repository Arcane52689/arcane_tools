
export function BEM(options) {
  let result = options.otherClasses || [];
  let block = options.block || '';
  let element = options.element || '';
  let modifiers = options.modifiers || '';
  let base = '';
  if (block) {
    base = block;
    if (element) {
      base + `__${element}`;
    }
    result.push(base);
    if (modifiers) {
      result = result.concat(modifiers.map((modifier) => `${base}--${modifier}`));
    }
  }
  return result.join(' ');
}