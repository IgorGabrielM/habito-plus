import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EstatisticasScreen = ({ navigation }: any) => {
    const dadosMock = {
        totalHabitos: 3,
        diasConsecutivos: 15,
        melhorHabito: 'Meditar',
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Estatísticas</Text>

            <View style={styles.statsContainer}>
                <Text style={styles.stat}>Hábitos cadastrados: <Text style={styles.statValue}>{dadosMock.totalHabitos}</Text></Text>
                <Text style={styles.stat}>Dias consecutivos: <Text style={styles.statValue}>{dadosMock.diasConsecutivos}</Text></Text>
                <Text style={styles.highlight}>Melhor hábito: {dadosMock.melhorHabito}</Text>
            </View>

            {/* Botão para voltar */}
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para Home</Text>
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
    statsContainer: {
        backgroundColor: '#FFF',
        padding: 16,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        alignItems: 'center',
    },
    stat: {
        fontSize: 18,
        color: '#555',
        marginBottom: 8,
    },
    statValue: {
        fontWeight: 'bold',
        color: '#000',
    },
    highlight: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#FF6F00',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        textAlign: 'center',
    },
});

export default EstatisticasScreen;
