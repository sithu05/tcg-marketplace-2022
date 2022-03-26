import { Select } from "@chakra-ui/react";
import { useField } from "formik";

export const SearchForm__Set = () => {
    const [field] = useField<string>('set');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Set</option>
        </Select>
    );
}