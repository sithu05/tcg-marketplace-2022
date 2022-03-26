import type { ComponentSingleStyleConfig } from "@chakra-ui/react";

const Input: ComponentSingleStyleConfig = {
    sizes: {
        md: {
            field: {
                fontSize: '14px'
            }
        }
    },
    variants: {
        outline: {
            field: {
                border: 0,
                textAlign: 'center',
                borderRadius: "100px",
                backgroundColor: "white",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.03)",
                _placeholder: {
                    color: 'brand.placeholder'
                },
            }
        }
    }
};

export default Input;