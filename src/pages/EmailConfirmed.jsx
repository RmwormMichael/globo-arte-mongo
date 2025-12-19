import { useEffect, useState, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function EmailConfirmed() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const token = params.get("token");

  const [estado, setEstado] = useState("cargando");
  const yaEjecutado = useRef(false);

  useEffect(() => {
    if (yaEjecutado.current) return;
    yaEjecutado.current = true;

    const confirmarCuenta = async () => {
      try {
        const res = await fetch(
          `http://localhost:4000/api/usuarios/confirmar/${token}`
        );

        if (!res.ok) throw new Error();

        setEstado("ok");

        setTimeout(() => navigate("/"), 3000);
      } catch {
        setEstado("error");
      }
    };

    if (token) confirmarCuenta();
  }, [token, navigate]);

  if (estado === "cargando") return <p>Confirmando cuenta...</p>;
  if (estado === "error") return <p>Error al confirmar la cuenta</p>;

  return (
    <div className="text-center p-5">
      <h1>¡Cuenta confirmada! 🎉</h1>
      <p>Ya puedes iniciar sesión</p>
    </div>
  );
}
