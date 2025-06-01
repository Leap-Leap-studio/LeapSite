import { useEffect } from "react";

export default function EulaRedirect() {
  useEffect(() => {
    window.location.href = "/EULA%20LEAP.pdf";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Reindirizzamento all'EULA...</p>
      <a href="/EULA%20LEAP.pdf" className="text-blue-600 underline mt-2">Clicca qui se non vieni reindirizzato</a>
    </div>
  );
} 