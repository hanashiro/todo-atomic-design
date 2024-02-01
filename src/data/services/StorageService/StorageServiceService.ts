class StorageBase {
    constructor(private storage: Storage) {}

    get<T>(key: string, defaultValue: T): T {
        const value = this.storage.getItem(key);
        if (value === null) {
            return defaultValue;
        }
        try {
            return JSON.parse(value) as T;
        } catch (error) {
            return value as T;
        }
    }

    set<T>(key: string, value: T | string) {
        if (typeof value !== 'string') {
            value = JSON.stringify(value);
        }
        this.storage.setItem(key, value);
    }

    remove(key: string) {
        this.storage.removeItem(key);
    }

    removeItems(keys: string[]) {
        keys.forEach((key) => this.remove(key));
    }

    clear() {
        this.storage.clear();
    }
}

export class LocalStorage extends StorageBase {
    private static _instance: LocalStorage | null = null;

    private constructor() {
        super(window.localStorage);
    }

    static get instance(): LocalStorage {
        if (!LocalStorage._instance) {
            LocalStorage._instance = new LocalStorage();
        }
        return LocalStorage._instance;
    }
}
