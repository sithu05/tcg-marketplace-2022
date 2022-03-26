import { Input } from "@chakra-ui/react"
import { useField } from "formik"

export const SearchForm__Input = () => {
    const [field] = useField<string>('name');

    return (
        <Input
            placeholder="Name.."
            {...field}
        />
    );
}