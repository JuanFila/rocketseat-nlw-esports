import { TouchableOpacity, View, Text } from 'react-native';
import { GameController } from 'phosphor-react-native'

import { THEME } from '../../theme';

import { DuoInfo } from '../DuoInfo';

import { styles } from './style';

export interface DuoCardProps {
  id: string;
  hoursStart:string;
  hoursEnd: string;
  name: string;
  usoVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

interface Props  {
  data: DuoCardProps;
  onConnect: ()=> void;
}

export function DuoCard({data, onConnect}: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo
      label="Nome"
      value={data.name}
      />
            <DuoInfo
      label="Tempo de jogo"
      value={`${data.yearsPlaying} anos`}
      />
            <DuoInfo
      label="Disponibilidade"
      value={`${data.weekDays.length} dias \u2022 ${data.hoursStart} - ${data.hoursEnd}`}
      />
            <DuoInfo
      label="Chamada de áudio"
      value={data.usoVoiceChannel ? "Sim" : "Não"}
      colorValue={data.usoVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
      />
      <TouchableOpacity
      style={styles.button}
      onPress={onConnect}
      >
        <GameController
        color={THEME.COLORS.TEXT}
        size={20}
        />
        <Text style={styles.buttonTitle}>
        Conectar
        </Text>

      </TouchableOpacity>

    </View>
  );
}