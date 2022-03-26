import { extendTheme } from "@chakra-ui/react";

import styles from './styles'

import Select from './components/select'
import Input from './components/input'

const overrides = {
    styles,
    colors: {
        brand: {
            secondary: '#6A6969',
            placeholder: '#BCBBBB'
        }
    },
    components: {
        Input,
        Select
    }
};

export default extendTheme(overrides);