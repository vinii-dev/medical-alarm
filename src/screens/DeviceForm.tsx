import {
  AddIcon,
  Button,
  Flex,
  FormControl,
  IconButton,
  Text,
  VStack,
} from 'native-base';
import React, { useEffect, useState } from 'react';
import { AlarmCard, AlarmType } from '../components/AlarmCard';
import { Input } from '../components/Input';
import { Modal } from '../components/DeviceForm/Modal';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import { createInitialAlarm } from '../utils/alarmUtils';
import { AlarmCardList } from '../components/AlarmCardList';
import { QrCodeCamera } from '../components/DeviceForm/QrCodeCamera';
import { BarCodeScannerResult } from 'expo-barcode-scanner';
import { Camera } from 'expo-camera';

export const DeviceForm = ({ navigation }: any) => {
  const [alarmList, setAlarmList] = useState<AlarmType[]>([
    createInitialAlarm(),
  ]);
  const [openQrCode, setOpenQrCode] = useState(false);

  const onQrCodeClick = () => {
    setOpenQrCode(true);
    navigation.setOptions({ headerShown: false });
  };

  const handleBarCodeScanned = ({ data }: BarCodeScannerResult) => {
    setOpenQrCode(false);
    navigation.setOptions({ headerShown: true });
  };

  if (openQrCode) {
    return (
      <QrCodeCamera
        onHandleBarCodeScanned={handleBarCodeScanned}
        onIconClose={() => {
          setOpenQrCode(false);
          navigation.setOptions({ headerShown: true });
        }}
      />
    );
  }

  return (
    <Flex px={4} pb={4} justifyContent="space-between" height="full">
      <VStack space={4}>
        <FormControl>
          <Input labelName="Nome" placeholder="Ex.: Remédios da Mãez" />
        </FormControl>
        <FormControl>
          <Input
            labelName="Código do sensor"
            placeholder="Ex.: 573727bf-82bb-49cd-819b-f82f8312f357"
            rightElement={
              <IconButton
                size="sm"
                mr={2}
                onPress={onQrCodeClick}
                icon={<AddIcon />}
              />
            } // TODO: Change AddIcon to scanner icon
          />
        </FormControl>
        <FormControl>
          <AlarmCardList alarmList={alarmList} setAlarmList={setAlarmList} />
        </FormControl>
      </VStack>
      <Button>Cadastrar</Button>
    </Flex>
  );
};
