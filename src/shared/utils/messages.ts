import locales from '@/shared/locales';

export const getMaxLengthMessage = ({length}: {length: number}) => {
  return `${locales.errors.field_max_length} ${length} ${locales.errors.field_characters}`;
};
