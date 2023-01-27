import { NativeBaseProvider } from "native-base";
import { QueryClient, QueryClientProvider } from "react-query";
import Routes from "./src/router";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NativeBaseProvider>
        <Routes />
      </NativeBaseProvider>
    </QueryClientProvider>
  );
}
