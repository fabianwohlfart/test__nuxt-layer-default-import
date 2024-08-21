import _slugify from 'slugify';
import _db from 'localforage';
import { format, parseISO } from 'date-fns';
import { de, enGB } from 'date-fns/locale';

export function useTest() {
  return {
    slugify: _slugify,
  };
}
