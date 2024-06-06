import * as React from 'react';
import {
  Control,
  Controller,
  ControllerProps,
  useController,
} from 'react-hook-form';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TextInputProps,
} from 'react-native';
import {appColors} from '~/constants/appColors';
import TextComponent from '../text';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fontFamilies} from '~/constants/fontFamilies';

interface InputControllerProps extends TextInputProps {
  name: string;
  label?: string;
  control?: Control<any, any>;
  defaultValue?: string;
  placeholder?: string;
  errorMessage?: string;
  helperMessage?: string;
  isInline?: boolean;
  _controller?: Omit<ControllerProps, 'render' | 'name'>;
  inputLeftElement?: React.ReactNode;
  inputRightElement?: React.ReactNode;
}

export interface ControlledFormInputProps extends InputControllerProps {
  render?: ControllerProps['render'];
  control: Control<any, any>;
  value?: never;
  onChangeText?: never;
  _controller?: Omit<ControllerProps, 'render' | 'name'>;
}

interface UncontrolledFormInputProps extends InputControllerProps {
  render?: never;
  control?: never;
  _controller?: never;
  value?: string;
  onChangeText: (val: string) => void;
}

const InputController = ({
  name,
  label,
  control,
  defaultValue,
  helperMessage,
  isInline,
  _controller,
  render,
  inputLeftElement,
  inputRightElement,
  ...props
}: ControlledFormInputProps | UncontrolledFormInputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPasswordInput = props.secureTextEntry;
  const {fieldState} = useController({control, name});
  const err = fieldState?.error?.message;

  const renderSecureEntryToggle = () => (
    <TouchableOpacity
      onPress={() => setShowPassword(!showPassword)}
      style={styles.iconButton}>
      <Ionicons
        name={showPassword ? 'eye-off' : 'eye'}
        size={21}
        color={'gray'}
      />
    </TouchableOpacity>
  );

  const inputProps = {
    ...props,
    secureTextEntry: isPasswordInput && !showPassword,
    style: [styles.input, isInline ? styles.inlineInput : {}],
  };

  return (
    <View style={[styles.container, isInline ? styles.inlineContainer : {}]}>
      {label && <Text style={styles.label}>{label}</Text>}
      {isInline && helperMessage && (
        <Text style={styles.helperText}>{helperMessage}</Text>
      )}
      <View
        style={[
          styles.inputWrapper,
          {...(fieldState?.invalid && {borderColor: 'red'})},
        ]}>
        {inputLeftElement && inputLeftElement}
        {control ? (
          <Controller
            control={control}
            defaultValue={defaultValue ?? ''}
            render={
              render
                ? render
                : ({field: {onChange, onBlur, value}}) => (
                    <TextInput
                      value={String(value)}
                      onChangeText={val => onChange(val)}
                      onBlur={onBlur}
                      {...inputProps}
                    />
                  )
            }
            name={name}
            {...(_controller ?? {})}
          />
        ) : (
          <TextInput {...inputProps} />
        )}
        {!isPasswordInput && inputRightElement && inputRightElement}
        {isPasswordInput && renderSecureEntryToggle()}
      </View>
      {err && <Text style={styles.errorText}>{err}</Text>}
      {helperMessage && !isInline && (
        <Text style={styles.helperText}>{helperMessage}</Text>
      )}
    </View>
  );
};

export default InputController;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inlineContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 56,
  },
  input: {
    flex: 1,
    height: 56,
    fontSize: 14,
    fontFamily: fontFamilies.regular,
    paddingHorizontal: 12,
  },
  inlineInput: {
    textAlign: 'right',
  },
  iconButton: {
    marginLeft: 10,
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  },
  helperText: {
    color: 'gray',
    marginTop: 5,
  },
});
