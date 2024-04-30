import { object, number, string } from "yup";
export const StartValid = object({
    endTime: number("just number")
        .integer("Decimals are not allowed")
        .typeError("Amount must be a number")
        .required("is required")
});
