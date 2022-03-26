import { Input } from "@chakra-ui/react"
import { useField } from "formik"

export const SearchForm__Input = () => {
    const [field] = useField<string>('name');

    return (
        <Input
            fontSize="14px"
            placeholder="Name.."
            bgColor="white"
            border="0"
            borderRadius="100px"
            boxShadow="0px 4px 10px rgba(0, 0, 0, 0.03)"
            textAlign="center"
            _placeholder={{
                color: "brand.placeholder"
            }}
            {...field}
        />
    );
}