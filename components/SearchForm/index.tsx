import { Flex } from "@chakra-ui/react"
import { Form, Formik } from "formik"

import { SearchForm__Input } from "./SearchForm__Input"
import { SearchForm__AutoSubmit } from "./SearchForm__AutoSubmit";

export interface SearchFormValues {
    name: string;
}

type Props = {
    onSubmit: (values: SearchFormValues) => void;
}


export const SearchForm = ({ onSubmit }: Props) => {
    const initialValues: SearchFormValues = {
        name: ''
    };

    return (
        <Flex
            mt="45px"
            justifyContent="center"
        >
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                <Form>
                    <SearchForm__Input />

                    <SearchForm__AutoSubmit />
                </Form>
            </Formik>
        </Flex>
    )
}