

declare namespace Props {

    interface FormInputProps {
        disabled: boolean;
        title: string;
        inputType: "text" | "password";
        value: string | null;
        defaultValue: string;
        key: string;
    }

    interface HistoryTableProps {
        historyId: number;
        projectName: string;
        userName: string;
        time: string;
    }
}