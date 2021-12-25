import moment, { Moment } from "moment";

export const formRules = {
    required: (message: string = "Обязательное значение") => ({
        required: true,
        message,
    }),
    isDateAfter: (message: string) => () => ({
        validator(_: any, value: Moment) {
            if (value.isAfter(moment())) {
                return Promise.resolve();
            }

            return Promise.reject(new Error(message));
        },
    }),
};
