import { Box, Button, Toast, VStack } from "native-base";
import * as LocalAuthentication from "expo-local-authentication";

export function Home() {
  async function mark() {
    const hasFingerPrintHardware = await LocalAuthentication.hasHardwareAsync();

    if (!hasFingerPrintHardware) {
      Toast.show({
        title: "Seu dispositivo não possui um leito de digital",
        placement: "top",
      });
      return;
    }

    const hasFingerPrintStored = await LocalAuthentication.isEnrolledAsync();

    if (!hasFingerPrintStored) {
      Toast.show({
        title:
          "Nenhuma digital cadastrada no seu dispositivo, por favor cadastre",
        placement: "top",
      });
      return;
    }

    const fingerPrint = await LocalAuthentication.authenticateAsync();

    if (!fingerPrint.success) {
      Toast.show({
        title: "Digital incompatível",
        placement: "top",
      });
      return;
    }

    console.log(fingerPrint.success);
  }

  return (
    <Box safeArea flex={1} alignItems="center">
      <VStack flex={1}>
        <Button onPress={mark}>Marcar Entrada</Button>
      </VStack>
    </Box>
  );
}
