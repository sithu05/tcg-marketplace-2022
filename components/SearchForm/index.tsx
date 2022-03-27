import { Box, Flex, Input, Select, Stack } from "@chakra-ui/react"
import { Form, Formik } from "formik"

import { SearchForm__Input } from "./SearchForm__Input"
import { SearchForm__AutoSubmit } from "./SearchForm__AutoSubmit";
import { SearchForm__Type } from "./SearchForm__Type";
import { SearchForm__Rarity } from "./SearchForm__Rarity";
import { SearchForm__Set } from "./SearchForm__Set";

export interface SearchFormValues {
    name: string;
    type: string;
    rarity: string;
    set: string;
}

type Props = {
    onSubmit: (values: SearchFormValues) => void;
}


export const SearchForm = ({ onSubmit }: Props) => {
    const initialValues: SearchFormValues = {
        name: '',
        type: '',
        rarity: '',
        set: ''
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
                <Box
                    width="full"
                    maxWidth={{
                        base: '383px',
                        lg: '675px'
                    }}
                >
                    <Form>
                        <Stack
                            spacing="16px"
                            direction={{
                                base: "column",
                                lg: "row"
                            }}
                        >
                            <SearchForm__Input />

                            <Stack
                                spacing="16px"
                                direction="row">
                                <SearchForm__Type />
                                <SearchForm__Rarity />
                                <SearchForm__Set />
                            </Stack>
                        </Stack>

                        <SearchForm__AutoSubmit />
                    </Form>
                </Box>
            </Formik>
        </Flex>
    )
}