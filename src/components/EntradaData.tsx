import { FormControl, Input } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

interface EntradaDataProps {
  label?: string;
}

export function EntradaData({ label }: EntradaDataProps): JSX.Element {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
  };

  return (
    <FormControl mt={3} flex={1}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        value={date.toLocaleDateString('pt-BR')}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        onFocus={() => setShow(true)}
      />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      )}
    </FormControl>
  );
}