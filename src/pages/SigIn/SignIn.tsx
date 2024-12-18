import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { login, fetchProtectedData } from "../../redux/thunks/authThunks";
import { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Logo } from "../../components/Logo/Logo";
import { Text } from "../../components/Text/Text";
import { TextInput } from "../../components/TextInput/TextInput";
import { Loading } from "../../components/Loading/Loading";
import { toast } from "react-toastify";

export function SignIn() {
  const dispatch = useDispatch<any>();
  const { token, role, error, loading } = useSelector(
    (state: RootState) => state.auth
  );

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  const handleSignIn = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        toast.success("Autenticação bem-sucedida!");
      })
      .catch(() => {
        toast.error("Falha na autenticação. Verifique suas credenciais.");
      });
  };

  useEffect(() => {
    if (token && role) {
      dispatch(fetchProtectedData());
    }
  }, [token, role, dispatch]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col items-center justify-center text-gray-100 px-4">
      <header className="flex flex-col items-center text-center w-full">
        <Logo className="w-32 h-32" />
        <Heading size="lg" className="mt-4">
          Portal TIVIT
        </Heading>
        <Text size="lg" className="text-white mt-1">
          Faça login e comece a usar!
        </Text>
      </header>
      <form
        onSubmit={handleSignIn}
        className="flex flex-col gap-4 w-full max-w-sm mt-10"
      >
        <label className="flex flex-col gap-3">
          <Text className="font-semibold">Nome de usuário</Text>
          <TextInput.Root>
            <TextInput.Input
              type="text"
              placeholder="Digite seu usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <label className="flex flex-col gap-3">
          <Text className="font-semibold">Sua senha</Text>
          <TextInput.Root>
            <TextInput.Input
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </TextInput.Root>
        </label>

        <Button
          type="submit"
          className={`mt-4 ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={!isFormValid}
        >
          Entrar na plataforma
        </Button>
      </form>
    </div>
  );
}
