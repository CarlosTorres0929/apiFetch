import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function CardComponent(props){
    const {patient,doctor,descripcion, _id} = props.patient;
    return(
        <View style={styles.container}>
            <Text>{patient}</Text>
            <Text>{doctor}</Text>
            <Text>{descripcion}</Text>
            <Text>{_id}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderColor: 'black',
      borderRadius: 10,
      borderWidth: 1,
      padding: 20,
      marginTop: 10
    },
  });

export default CardComponent;