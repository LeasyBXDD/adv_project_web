

declare namespace Layout {

    interface BreadItem {
        title: string;
        toPathName?: string;
    }

    interface HeaderMenu {
        title: string;
        pathName?: string;
        key: number;
        breadList?: Array<BreadItem>;
        path?: string;
    }

    interface ManagerMenu {
        key: number;
        title: string;
        pathName: string;
    }
}