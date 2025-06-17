import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import HabitCard from '../components/habit-card';

const HomeScreen = ({ navigation }) => {
    const [habitos, setHabitos] = useState([]);

    useEffect(() => {
        carregarHabitos();
    }, []);

    const carregarHabitos = async () => {
        const dadosSalvos = await AsyncStorage.getItem('habitos');
        if (dadosSalvos) {
            setHabitos(JSON.parse(dadosSalvos));
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Seus Hábitos</Text>

            <FlatList
                data={habitos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <HabitCard nome={item.nome} descricao={item.descricao} />}
            />

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.buttonText}>Adicionar Hábito</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.navigate('Estatísticas')}>
                    <Text style={styles.secondaryButtonText}>Ver Estatísticas</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
    secondaryButton: {
        backgroundColor: '#FFA726',
    },
    secondaryButtonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    }
});

export default HomeScreen;
