import { Box, Button, FormControl, Icon, Input, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import {
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProps } from "../../router/stack/type";

interface LoginCredentialsProps {
  username: string;
  password: string;
}

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation<StackNavigationProps>();

  const yupSchema = yup
    .object()
    .shape({
      username: yup
        .string()
        .email("Email precisa ser valido")
        .required("Email obrigatório para entrar"),
      password: yup
        .string()
        .length(8, "Senha precisa ter no mínimo 8 caracteres")
        .required("Senha obrigatória para entrar"),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginCredentialsProps>({ resolver: yupResolver(yupSchema) });

  const onSubmit = (credentials: LoginCredentialsProps) => {
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box safeArea flex={1} alignItems="center" justifyContent="space-around">
        <Box flex={1} />
        <VStack flex={1} width="80%">
          <FormControl isInvalid={!!errors.username}>
            <FormControl.Label>Usuário</FormControl.Label>
            <Controller
              control={control}
              name="username"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.username?.message}
            </FormControl.ErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormControl.Label>Senha</FormControl.Label>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  type={showPassword ? "text" : "password"}
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                  InputRightElement={
                    <TouchableOpacity
                      onPress={() => setShowPassword(!showPassword)}
                    >
                      <Icon
                        as={
                          <Ionicons name={showPassword ? "eye" : "eye-off"} />
                        }
                        size="md"
                        m={2}
                        color={showPassword ? "gray.500" : "black"}
                      />
                    </TouchableOpacity>
                  }
                />
              )}
            />
            <FormControl.ErrorMessage>
              {errors.password?.message}
            </FormControl.ErrorMessage>
          </FormControl>
        </VStack>
        <VStack flex={1} width="80%" justifyContent="space-evenly">
          <Button onPress={handleSubmit(onSubmit)}>Login</Button>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
