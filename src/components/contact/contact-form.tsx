"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value || undefined,
      eventType: (form.elements.namedItem("eventType") as HTMLSelectElement).value,
      date: (form.elements.namedItem("date") as HTMLInputElement).value || undefined,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Error al enviar");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-zinc-900/80 border border-zinc-800 text-white rounded-xl px-6 py-16 text-center backdrop-blur-sm">
        <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h3 className="text-3xl font-bold mb-4">¡Mensaje enviado!</h3>
        <p className="text-zinc-400 max-w-xs mx-auto text-lg">
          Gracias por contactar. Te responderé en menos de 24 horas para empezar
          a planear tu evento.
        </p>
        <button
          className="mt-8 text-sm text-zinc-500 hover:text-white underline"
          onClick={() => setSubmitted(false)}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all placeholder:text-zinc-500"
          name="name"
          placeholder="Nombre *"
          required
          type="text"
        />
        <input
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all placeholder:text-zinc-500"
          name="email"
          placeholder="Email *"
          required
          type="email"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all placeholder:text-zinc-500"
          name="phone"
          placeholder="Teléfono"
          type="tel"
        />
        <select
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all"
          name="eventType"
          required
          defaultValue=""
        >
          <option disabled value="">
            Tipo de Evento *
          </option>
          <option value="boda">Boda</option>
          <option value="corporativo">Evento Corporativo</option>
          <option value="privado">Fiesta Privada</option>
          <option value="club">Club / Local</option>
        </select>
      </div>
      <div>
        <input
          className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all [color-scheme:dark]"
          name="date"
          type="date"
          aria-label="Fecha del Evento"
        />
      </div>
      <textarea
        className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:ring-2 focus:ring-white/20 focus:border-white transition-all resize-none placeholder:text-zinc-500"
        name="message"
        placeholder="Cuéntame sobre tu evento... *"
        required
        rows={5}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          name="privacy"
          required
          className="mt-1 w-4 h-4 accent-white rounded border-zinc-600 bg-zinc-900"
        />
        <span className="text-sm text-zinc-400">
          He leído y acepto la{" "}
          <Link href="/politica-privacidad" className="underline hover:text-white transition-colors" target="_blank">
            Política de Privacidad
          </Link>
          . Consiento el tratamiento de mis datos para gestionar mi consulta. *
        </span>
      </label>
      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-white text-black px-6 py-4 rounded-lg font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
      >
        {loading ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
