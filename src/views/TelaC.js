import React from 'react'
import TextCentral from '../components/TextCentral'

export default props => {
    return (
        <TextCentral corFundo='#9932cd'>
            Tela C - {props?.route?.params?.numero ? props.route.params.numero : 0}
        </TextCentral>
    )
}