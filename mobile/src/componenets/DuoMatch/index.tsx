import { useState } from 'react';
import {Text, View, Modal, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import { styles } from './style';
import { THEME } from '../../theme';
import {Activity, CheckCircle} from 'phosphor-react-native'
import { Heading } from '../Heading';
import * as Clipboard from 'expo-clipboard'

interface Props extends ModalProps{
    discord: string;
    onClose: () => void;
}

export function DuoMatch({discord,onClose, ...rest }: Props) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordUserToClipboard() {
        setIsCopping(true)
        
        await Clipboard.setStringAsync(discord);

        Alert.alert("Disord cópiado!", "Usuário copiado para você colar no Discord e encontrar seu duo!")
        setIsCopping(false)
    }

    return (
    <Modal
    animationType='fade'
    transparent
    statusBarTranslucent
    {...rest}
    >
        
    <View style={styles.container}>
        <View style={styles.content}>
            <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
            >
                <MaterialIcons
                name="close"
                size={20}
                color={THEME.COLORS.CAPTION_300}
                />
            </TouchableOpacity>

            <CheckCircle
            size={64}
            color={THEME.COLORS.SUCCESS}
            weight='bold'
            />

            <Heading
            title="Let's Play"
            subtitle="Agora é só começar a jogar !"
            style={{alignItems:'center', marginTop:32}}
            />
        <Text style={styles.label}>
            Adicione no Discord
        </Text>
        <TouchableOpacity
        style={styles.discordButton}
        onPress={handleCopyDiscordUserToClipboard}
        disabled={isCopping }
        >
        <Text style={styles.discord}>
            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
        </Text>
        </TouchableOpacity>
        </View>
    </View>
    </Modal>
  );
}