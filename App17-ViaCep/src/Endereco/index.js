import React, { useState } from 'react';

export default function Endereco() {
    const {cep, logradouro, bairro, localidade, uf} = this.props.data;

    return (
        <View>
            <View>
                <Text>CEP: </Text>
                <Text>{cep}</Text>
            </View>
            <View>
                <Text>Logradouro: </Text>
                <Text>{logradouro}</Text>
            </View>
            <View>
                <Text>Bairro: </Text>
                <Text>{bairro}</Text>
            </View>
            <View>
                <Text>Cidade: </Text>
                <Text>{localidade}</Text>
            </View>
            <View>
                <Text>Estado: </Text>
                <Text>{uf}</Text>
            </View>
            
        </View>
    )
}