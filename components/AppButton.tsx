import { Link } from "expo-router";
import { FC } from "react";
import { Text, TouchableHighlight } from "react-native";

interface AppButtonProps {
    children?: string;
    backgroundColor?: '#f4511e' | '#f4e61e';
    color?: 'white' | 'black';
    onPress?: () => void;
    href?: string;
}

const AppButton:FC<AppButtonProps>=({
    backgroundColor = '#f4511e',
    color = 'white',
    onPress = () => false,
    children = 'AppButton',
    href = ''
})  => {

    return (

        <TouchableHighlight
            style={{
                flex: 1,
                minHeight:20,
                backgroundColor: backgroundColor,
                justifyContent: 'center',
                alignItems: "center",
                borderRadius: 10,
                margin: 10
            }} onPress={onPress}>

            {
                href
                ?
                <Link href={href}>
                    <Text style={{ color: color }} >{children}</Text>
                </Link>
                :
                <Text style={{ color: color }} >{children}</Text>
            }


        </TouchableHighlight>
    );
}

export default AppButton

/* 
AppButton.defaultProps = {
    backgroundColor: '#f4511e',
    color: 'white',
    onPress: () => false,
    children: 'AppButton'
} as AppButtonProps; 
*/