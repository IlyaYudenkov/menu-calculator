interface IRoot {
    path: string;
    toString: () => string;
}

class Route {
    private readonly root: string;

    constructor(root: string) {
        this.root = root;
    }

    createPath(subPath: string): IRoot {
        const path = `${this.root}${subPath}`;
        return {
            path,
            toString: () => path,
        };
    }
}

class PUBLIC extends Route {
    LOGIN = this.createPath('/login');
}

class PRIVATE extends Route {
    HOME = this.createPath('/home');
}

export const PUBLIC_PAGES = new PUBLIC('')
export const PRIVATE_PAGES = new PRIVATE('')