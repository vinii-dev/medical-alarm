import RNDateTimePicker from '@react-native-community/datetimepicker';
import {
  AddIcon,
  Button,
  FormControl,
  Input,
  Modal as BaseModal,
} from 'native-base';
import React, { useState } from 'react';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

export const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <BaseModal isOpen={isOpen} onClose={() => setIsOpen(false)} size="full">
      <BaseModal.Content>
        <BaseModal.CloseButton />
        <BaseModal.Header>Adicione um horário</BaseModal.Header>
        <BaseModal.Body></BaseModal.Body>
        <BaseModal.Footer></BaseModal.Footer>
      </BaseModal.Content>
    </BaseModal>
  );
};
