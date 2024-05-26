import {Text, ITextAreaProps} from "native-base";
import { ReactNode } from "react";

interface TituloPros extends ITextAreaProps{
    children: ReactNode
}

export function Titulo ({children, ...rest}: TituloPros){
    return (
        <Text
        fontSize="2xl"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        marginTop={5}
        {...rest}
      >
        {children}
      </Text>
    )
}