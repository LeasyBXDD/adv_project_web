

declare namespace Response {

    interface Login {
        userId?: number | null;
        userAva?: string;
        userName?: string;
        identity: string;
    }

    interface Register {
        readonly isRegistered: boolean
    }

}