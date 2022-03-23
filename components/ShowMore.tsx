import {  Stack, Text } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'

export const ShowMore = () => {
    return (
        <Stack
            width="fit-content"
            direction="row"
            alignItems="center"
            color="brand.secondary"
        >
            <SearchIcon width="14px" />
            <Text
                fontWeight="medium"
            >show more</Text>
        </Stack>
    )
}