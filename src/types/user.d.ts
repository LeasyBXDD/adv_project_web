

declare namespace User {

    interface Info {
        userId?: number | null;
        userAva?: string;
        userName?: string;
        sex?: 1 | 0 | null;
        profile?: string;
        location?: string;
        phoneNum?: string;
        identity?: string;
    }

    interface Edu {
        schoolName: string;
        field: string;
        education: string;
    }

}