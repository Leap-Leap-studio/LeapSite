import { useEffect } from "react";

export default function TermsOfServiceRedirect() {
  useEffect(() => {
    window.location.href = "/TERMS%20OF%20SERVICE%20LEAP.pdf";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Reindirizzamento ai Termini di Servizio...</p>
      <a href="/TERMS%20OF%20SERVICE%20LEAP.pdf" className="text-blue-600 underline mt-2">Clicca qui se non vieni reindirizzato</a>
    </div>
  );
} 