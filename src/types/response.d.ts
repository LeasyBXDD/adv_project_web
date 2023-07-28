

declare namespace Response {

    interface Login {
        userId: number | null;
        userAva: string;
        userName: string;
    }

    interface Register {
        readonly isRegistered: boolean
    }

}