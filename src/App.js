import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextCentral from './components/TextCentral'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default props => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TelaA />
            <TelaB />
            <TelaC />
        </SafeAreaView>
    )
}