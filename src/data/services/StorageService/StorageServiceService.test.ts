import { LocalStorage } from './StorageServiceService';
// import { faker } from '@faker-js/faker';

describe('StorageServiceService', () => {
    beforeEach(() => {
        LocalStorage.instance.clear();
    });

    it('should test LocalStorage', () => {
        expect(LocalStorage.instance.get('a', 123)).toBe(123);

        LocalStorage.instance.set('a', 'b');
        expect(LocalStorage.instance.get('a', 'J')).toBe('b');

        LocalStorage.instance.remove('a');
        expect(LocalStorage.instance.get('a', 'W')).toBe('W');

        LocalStorage.instance.set('a', 1);
        LocalStorage.instance.set('b', 2);
        expect(LocalStorage.instance.get('a', 9)).toBe(1);
        expect(LocalStorage.instance.get('b', 5)).toBe(2);

        LocalStorage.instance.removeItems(['a', 'b']);
        expect(LocalStorage.instance.get('a', 3)).toBe(3);
        expect(LocalStorage.instance.get('b', 4)).toBe(4);

        LocalStorage.instance.set('a', { a: 1 });
        expect(LocalStorage.instance.get('a', { a: 9 })).toStrictEqual({
            a: 1,
        });

        LocalStorage.instance.clear();
        expect(LocalStorage.instance.get('a', 7)).toBe(7);
    });
});
