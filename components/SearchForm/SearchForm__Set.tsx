import { Select } from "@chakra-ui/react";
import { useField } from "formik";

import { useSets } from "../../data/useSets";

export const SearchForm__Set = () => {
    const { data } = useSets();

    const [field] = useField<string>('set');

    return (
        <Select
            color={!field.value ? 'brand.placeholder' : 'black'}
            {...field}>
            <option hidden>Set</option>
            {data && data.map(item => (
                <option value={item.id} key={item.id}>
                    {item.name}
                </option>
            ))}
        </Select>
    );
}