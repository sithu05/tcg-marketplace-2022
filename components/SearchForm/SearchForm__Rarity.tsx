import { Select } from "@chakra-ui/react";
import { useField } from "formik";

import { useRarities } from '../../data/useRarities';

export const SearchForm__Rarity = () => {
    const { data } = useRarities();
    const [field] = useField<string>('rarity');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Rarity</option>
            {data && data.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </Select>
    );
}