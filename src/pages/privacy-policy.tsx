import { useEffect } from "react";

export default function PrivacyPolicyRedirect() {
  useEffect(() => {
    window.location.href = "/PRIVACY%20POLICY%20LEAP.pdf";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Reindirizzamento alla Privacy Policy...</p>
      <a href="/PRIVACY%20POLICY%20LEAP.pdf" className="text-blue-600 underline mt-2">Clicca qui se non vieni reindirizzato</a>
    </div>
  );
} 