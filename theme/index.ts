import { extendTheme } from "@chakra-ui/react";

import styles from './styles'

import Select from './components/select'
import Input from './components/input'

const overrides = {
    styles,
    colors: {
        brand: {
            primary: '#1D1C1C',
            secondary: '#6A6969',
            placeholder: '#BCBBBB',
            alert: "#FD2929",
            action: "#298BFD"
        }
    },
    components: {
        Input,
        Select
    }
};

export default extendTheme(overrides);