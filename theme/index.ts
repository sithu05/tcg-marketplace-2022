import { extendTheme } from "@chakra-ui/react";

import styles from './styles'

const overrides = {
    styles,
    colors: {
        brand: {
            secondary: '#6A6969',
            placeholder: '#BCBBBB'
        }
    }
};

export default extendTheme(overrides);