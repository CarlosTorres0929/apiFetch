import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableHighlight, FlatList } from 'react-native-gesture-handler';
import CardComponent from './card-component';
import { useIsFocused } from '@react-navigation/native';

function ListQuotes({ navigation }) {
    const isFocused = useIsFocused();
    const [patient, setPatient] = useState([]);
    /* Data for the flatlist */
    const fetchQuotes = async () =>{

     let response = await fetch('http://localhost:3000/citas');
        let jsonResponse = await response.json();
        setPatient(jsonResponse.patient);
    }
    useEffect(()=>{
        fetchQuotes();
    },[isFocused]);

    return (
        <View style={styles.container}>
          <Image
        style={styles.tinyLogo}
        source={require('../../img/medico.jpg')}
      />
      
          <TouchableHighlight style={styles.createQuotesButton} onPress={() => navigation.navigate('Create')}>
                <Text style={styles.buttonTextStyle}>Crear citas</Text>
            </TouchableHighlight>

            <FlatList
                data={patient}
                renderItem={({ item }) => <CardComponent patient={item}/>}
                keyExtractor={item => item._id}
            >
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    createQuotesButton: {
        height: 40,
        width:160,
        borderRadius:10,
        backgroundColor : "#4F97EA",
        marginLeft :50,
        marginRight:50,
        marginTop :20
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 25,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    tinyLogo: {
        
        width: 300,
        height: 150,
      },
});

export default ListQuotes;