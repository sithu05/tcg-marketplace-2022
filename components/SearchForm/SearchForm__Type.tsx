import { Select } from "@chakra-ui/react";
import { useField } from "formik";
import { useTypes } from "../../data/useTypes";

export const SearchForm__Type = () => {
    const { data } = useTypes();

    const [field] = useField<string>('type');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Type</option>
            {data && data.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </Select>
    );
}