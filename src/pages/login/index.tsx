import { Box, Button, FormControl, Input, VStack } from "native-base";
import { Controller, useForm } from "react-hook-form";
import { TouchableWithoutFeedback, Keyboard } from "react-native";

export function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Box safeArea flex={1} alignItems="center" justifyContent="space-around">
        <Box flex={1} />
        <VStack flex={1} width="80%">
          <FormControl>
            <FormControl.Label>Username</FormControl.Label>
            <Controller
              control={control}
              name="Username"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
              )}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              control={control}
              name="Password"
              defaultValue=""
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  onBlur={onBlur}
                  value={value}
                  onChangeText={(val) => onChange(val)}
                />
              )}
            />
          </FormControl>
        </VStack>
        <VStack flex={1} width="80%" justifyContent="space-evenly">
          <Button>Login</Button>
        </VStack>
      </Box>
    </TouchableWithoutFeedback>
  );
}
