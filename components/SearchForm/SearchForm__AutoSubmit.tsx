import { useFormikContext } from "formik";
import { useEffect } from "react";

export const SearchForm__AutoSubmit = () => {
    const { values, submitForm } = useFormikContext();

    useEffect(() => {
        submitForm();
    }, [values, submitForm]);


    return null;
}