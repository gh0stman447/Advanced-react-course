type Mods = Record<string, boolean | string>;
export function classNames(cls: string, mods: Mods = {}, additional: string[] = []) {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([, value]) => Boolean(value))
      .map(([key]) => key),
    ...additional.filter(Boolean),
  ]
    .join(' ')
    .trim();
}
