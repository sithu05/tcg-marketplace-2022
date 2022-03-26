import { Select } from "@chakra-ui/react";
import { useField } from "formik";

export const SearchForm__Rarity = () => {
    const [field] = useField<string>('rarity');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Rarity</option>
        </Select>
    );
}