import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cursos() {

    const navigation = useNavigation();

    function navegaDetalhesAdd() {
        const add = {
            curso: 'Blouse',
            mensagem: 'Blouse: Lightweight cotton blouse with floral embroidery. Versatile and elegant, perfect for any occasion. $80.00.',
            imagem: require('../../assets/blouse.png.webp')
        }
        navigation.navigate('Detalhes', { detalheCurso: add });
    }

    function navegaDetalhesIng() {
        const ing = {
            curso: 'High heels',
            mensagem: 'High Heels: Elevate your style with these fashionable shoes. Perfect for formal occasions or adding elegance to any outfit. $50.00',
            imagem: require('../../assets/highheels.webp')
        }
        navigation.navigate('Detalhes', { detalheCurso: ing });
    }

    function navegaDetalhesGast() {

        const gast = {
            curso: 'Necklace',
            mensagem: 'Exquisite Necklace: Add elegance to any outfit with this sterling silver necklace. Features a stunning crystal pendant with intricate filigree detailing. Secure lobster clasp and adjustable chain. $35.20.',
            imagem: require('../../assets/necklace.webp')
        }
        navigation.navigate('Detalhes', { detalheCurso: gast });
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navegaDetalhesAdd}>
                <Image source={require('../../assets/blouse.png.webp')} style={styles.image} />
                <Text style={styles.title}>Clothes</Text>
                <Text>Its versatility work and at social events.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navegaDetalhesIng}>
                <Image source={require('../../assets/highheels.webp')} style={styles.image} />
                <Text style={styles.title}>Shoes</Text>
                <Text>This women's shoe is an elegant piece</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={navegaDetalhesGast}>
                <Image source={require('../../assets/necklace.webp')} style={styles.image} />
                <Text style={styles.title}>Jewelry</Text>
                <Text>Is an elegant piece</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3',
        width: 200,
        height: 205,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 20,
    },
    title: {
        color: 'black',
        fontSize: 20,
        marginBottom: 5,
    },
    image: {
        width: 90,
        height: 90,
        marginBottom: 5,
        // Adicione estilos adicionais para a imagem aqui
    },
});
