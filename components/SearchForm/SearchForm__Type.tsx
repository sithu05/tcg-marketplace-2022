import { Select } from "@chakra-ui/react";
import { useField } from "formik";

export const SearchForm__Type = () => {
    const [field] = useField<string>('type');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Type</option>
        </Select>
    );
}