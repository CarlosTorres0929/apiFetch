import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

function CreateQuotes({navigation}) {
    const [patientName, setPatientName] = useState("");
    const [patientApe, setPatientApe] = useState("");
    const [documento, setDocumento] = useState("");
    const [fecha_naci, setFecha_naci] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [barrio, setBarrio] = useState("");
    const [celular, setCelular] = useState("");
    
    const createQuotes = async () => {
        try {
            
            const response = await fetch('http://localhost:3000/citas', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nombre: patientName,
                    apellido: patientApe,
                    documento: documento,
                    fecha_naci: fecha_naci,
                    ciudad: ciudad,
                    barrio: barrio,
                    celular: celular,
                }),
            });
            const json = await response.json();
            Alert.alert("Su cita ha sido creada exitosamente!");
            navigation.navigate('Quotes');
        } catch (error) {
            Alert.alert("Su cita no se pudo crear!");
        }
       
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Ingrese sus nombres" onChangeText={text => setPatientName(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese sus apellidos" onChangeText={text => setPatientApe(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese su documento de identidad" onChangeText={text => setDocumento(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese su fecha de nacimiento" onChangeText={text => setFecha_naci(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese su ciudad de residencia" onChangeText={text => setCiudad(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese su barrio" onChangeText={text => setBarrio(text)} />
            <TextInput style={styles.textInput} placeholder="Ingrese su numero celular" onChangeText={text => setCelular(text)} />
            <TouchableHighlight style={styles.createQuotesButton} onPress={createQuotes}>
                <Text style={styles.textStyleButton}>Crear Citas</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInput: {
        padding: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        width: Dimensions.get('screen').width * 0.9
    },
    createQuotesButton: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#4F97EA',
        borderRadius: 5,
        width: Dimensions.get('screen').width * 0.9,
        alignItems: 'center'
    },
    textStyleButton: {
        color: 'white',
        fontSize: 16
    }
});
export default CreateQuotes;