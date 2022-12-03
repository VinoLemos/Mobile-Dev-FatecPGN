import React, { Component } from 'react'
import { View, Text, Image, Modal, TouchableOpacity } from 'react-native'
import styles from './styles'


export default class Filmes extends Component {
    state = {
        modalVisible: false
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible })
    }

    render() {
        const { nome, foto, sinopse } = this.props.data;
        const { modalVisible } = this.state;

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.sinopse}>{sinopse}</Text>
                        </View>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => this.setModalVisible(!modalVisible)}
                        >
                                          <Text style={styles.textStyle}>Voltar</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>

                <View style={styles.card}>
                    <View style={styles.botaoView}>
                        <Text style={styles.tituloCard}>{nome}</Text>

                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => { this.setModalVisible(true) }}
                        >
                            <Text style={{ lineHeight: 20 }}>Ler mais...</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={{ uri: foto }}
                        style={styles.tinyLogo} />
                </View>

            </View>
        );
    }
}


