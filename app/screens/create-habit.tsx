import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CadastroScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [habitos, setHabitos] = useState([]);

    useEffect(() => {
        carregarHabitos(); // Carrega hábitos ao iniciar a tela
    }, []);

    const carregarHabitos = async () => {
        const dadosSalvos = await AsyncStorage.getItem('habitos');
        if (dadosSalvos) {
            setHabitos(JSON.parse(dadosSalvos));
        }
    };

    const handleAddHabit = async () => {
        const novoHabito = { id: Date.now().toString(), nome, descricao };
        const novosHabitos = [...habitos, novoHabito];

        await AsyncStorage.setItem('habitos', JSON.stringify(novosHabitos));
        setHabitos(novosHabitos);
        alert(`Hábito "${nome}" cadastrado!`);
        setNome('');
        setDescricao('');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo Hábito</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do hábito"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.input}
                placeholder="Descrição"
                value={descricao}
                onChangeText={setDescricao}
            />

            <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
                <Text style={styles.buttonText}>Adicionar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.secondaryButton]} onPress={() => navigation.goBack()}>
                <Text style={styles.secondaryButtonText}>Voltar para Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F7FA',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        borderWidth: 1,
        borderColor: '#CCC',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    secondaryButton: {
        backgroundColor: '#FF6F00',
    },
    secondaryButtonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default CadastroScreen;
