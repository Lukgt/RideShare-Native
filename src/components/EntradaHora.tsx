import { FormControl, Input } from 'native-base';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

interface EntradaHoraProps {
  label?: string;
}

export function EntradaHora({ label }: EntradaHoraProps): JSX.Element {
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentTime = selectedDate || time;
    setShow(false);
    setTime(currentTime);
  };

  return (
    <FormControl mt={3} flex={1}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <Input
        value={time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        shadow={3}
        onFocus={() => setShow(true)}
      />
      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChange}
        />
      )}
    </FormControl>
  );
}