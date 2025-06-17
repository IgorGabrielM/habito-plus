import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HabitCard = ({ nome, descricao }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.habitName}>{nome}</Text>
            <Text style={styles.description}>{descricao}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        marginBottom: 12,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    habitName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 4,
    },
    description: {
        fontSize: 16,
        color: '#666',
    },
});

export default HabitCard;
