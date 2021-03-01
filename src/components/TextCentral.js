import React from 'react'
import { Text, View } from 'react-native'

export default props => {
    return (
        <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: props.corFundo
                    }}>
            <Text style={{ 
                            fontSize: 50,
                            backgroundColor: props.corFundo,
                            color: props.corTexto || '#FFF'
                        }}>
                    {props.children}
            </Text>
        </View>
    )
}