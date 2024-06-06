import { StyleSheet, Text, View } from "react-native";


export default function MainView() {
    return (
        <>
            <View style={view.header}>
                <Text>Infos.</Text>
            </View>
            
            <View style={view.container }>
                <Text>Infos 1.</Text>
                <Text>Infos 2.</Text>
                <Text>Infos 3.</Text>
                <Text>Infos 4.</Text>
                <Text>Infos 5.</Text>
                <Text>Infos 6.</Text>
                <Text>Infos 1.</Text>
                <Text>Infos 8.</Text>
                <Text>Infos 9.</Text>
            </View>
        </>
    );
}


const view = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: 'blue',
        margin: 5,
        //maxHeight:50 
    },

    container: {
        flex: 9,
        backgroundColor: 'gray',
        margin: 5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flexDirection: "column-reverse",
    }

});