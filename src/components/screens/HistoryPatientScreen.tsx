import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {useRoute, RouteProp} from '@react-navigation/native';
import {styles} from '../styles/HistoryPatientStyles';
import {formatDate, RootStackParamList} from './PatientDetailScreen';

export type HistoryPatientScreenRouteProp = RouteProp<
  RootStackParamList,
  'History'
>;

export const HistoryPatientScreen = (): React.JSX.Element => {
  const route = useRoute<HistoryPatientScreenRouteProp>();
  const {patientName, doctorName, date, time, age, sex, height} = route.params;

  const formatDateAndTime = (date: string, time: string): string => {
    return `${formatDate(date)} ${time}`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxShadow}>
        <View style={styles.patientInfoContainer}>
          <View style={styles.infoColumnOne}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Nombre</Text>
              <Text style={styles.infoValue}>{patientName}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Médico responsable</Text>
              <Text style={styles.infoValue}>{doctorName}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Fecha y Hora</Text>
              <Text style={styles.infoValue}>
                {formatDateAndTime(date, time)}
              </Text>
            </View>
          </View>
          <View style={styles.infoColumnTwo}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Edad</Text>
              <Text style={styles.infoValue}>{age} años</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Sexo</Text>
              <Text style={styles.infoValue}>{sex}</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Altura</Text>
              <Text style={styles.infoValue}>{height} cm</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        <Text style={styles.sectionTitle}>Resultados del análisis</Text>

        <ScrollView style={styles.analysisScrollView}>
          <View style={styles.analysisContainer}>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>
                Masa Libre de Grasa Total (MLGT)
              </Text>
              <Text style={styles.analysisValue}>55.2 kg</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>
                Agua Total del Cuerpo (ACT)
              </Text>
              <Text style={styles.analysisValue}>42.8 L</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>Agua Intracelular (ICW)</Text>
              <Text style={styles.analysisValue}>28.3 L</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>Agua Extracelular (ECW)</Text>
              <Text style={styles.analysisValue}>14.5 L</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>
                Porcentaje de Minerales (MINE)
              </Text>
              <Text style={styles.analysisValue}>4.7%</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>Masa Grasa (MG)</Text>
              <Text style={styles.analysisValue}>18.5 kg</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>
                Porcentaje de Masa Grasa (PMG)
              </Text>
              <Text style={styles.analysisValue}>24.3%</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>
                Índice de Masa Corporal (IMC)
              </Text>
              <Text style={styles.analysisValue}>22.8 kg/m²</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>Masa Muscular (MM)</Text>
              <Text style={styles.analysisValue}>32.5 kg</Text>
            </View>
            <View style={styles.analysisBox}>
              <Text style={styles.analysisLabel}>Proteínas (PRO)</Text>
              <Text style={styles.analysisValue}>10.1 kg</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};