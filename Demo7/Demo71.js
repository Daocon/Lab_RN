import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { collection, addDoc } from 'firebase/firestore';
import { FIRESTORE_DB } from '../Demo7/firebaseConfig';

const Demo71 = () => {
    const [text, setText] = useState('');
    const handleInsertData = async () => {
        try {
            const docRef = await addDoc(collection(FIRESTORE_DB, 'Students'), {
                text: text
            });
            console.log('Document written with ID: ', docRef.id);
            setText('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter text"
                value={text}
                onChangeText={setText}
            />
            <View style={styles.buttonContainer}>
                <Button
                    title="Insert Data"
                    onPress={handleInsertData}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    buttonContainer: {
        marginTop: 10,
    },
});

export default Demo71;