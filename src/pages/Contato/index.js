import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Button, TextInput, Alert, View,StyleSheet} from 'react-native'

export default function Inicio() {
    return (
        <SafeAreaView style={[styles.container]}>
            <Text style={{color: 'black'}}>Sign-up</Text>

            <TextInput style={{ borderColor: 'black', borderWidth: 1, width: 200, backgroundColor: '#d3d3d3', color: 'white' }} value="Nome"></TextInput>
            <TextInput style={{ borderColor: 'black', borderWidth: 1, width: 200, backgroundColor: '#d3d3d3', color: 'white' }} value="E-mail" ></TextInput>
            <TextInput style={{ borderColor: 'black', borderWidth: 1, width: 200, backgroundColor: '#d3d3d3', color: 'white' }} value="CPF"></TextInput>
            <View style={{width:100}}>
                <Button title="Enviar" color={'#1c1c1c'}
                    onPress={() => Alert.alert('Cadastro realizado com sucesso!')}></Button>
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})