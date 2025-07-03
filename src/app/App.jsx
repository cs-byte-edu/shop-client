import { AppRouter } from "./routes";
import { Providers } from "./providers";
import { useAxiosInterceptors } from "../hooks/useAxiosInterceptors";
import { useAuthInit } from "../hooks/useAuthInit";
import { useBoundStore } from "../store";

function App() {
  useAxiosInterceptors();
  useAuthInit();

  const isInitialized = useBoundStore((s) => s.isInitialized);

  if (!isInitialized) {
    return <div>Завантаження додатку...</div>;
  }

  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}

export default App;
