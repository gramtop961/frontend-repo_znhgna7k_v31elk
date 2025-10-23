import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function onSubmit(e) {
    e.preventDefault();
    setError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name');
    const email = data.get('email');
    const type = data.get('type');
    const message = data.get('message');

    if (!name || !email || !message) {
      setStatus('error');
      setError('Please fill in all required fields.');
      return;
    }

    try {
      setStatus('loading');
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message }),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.detail || 'Failed to send inquiry');
      }
      setStatus('success');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="bg-neutral-950 text-zinc-200">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Let’s build something exceptional</h2>
          <p className="mt-4 text-zinc-300">
            Share a bit about your project, timeline, and goals. I’ll respond within 1–2 business days.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-neutral-950 p-6 md:p-8 shadow-xl">
            <form onSubmit={onSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-zinc-400">Name</label>
                  <input name="name" type="text" required className="mt-2 w-full rounded-lg border border-zinc-800 bg-neutral-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400">Email</label>
                  <input name="email" type="email" required className="mt-2 w-full rounded-lg border border-zinc-800 bg-neutral-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-400">Project Type</label>
                <select name="type" className="mt-2 w-full rounded-lg border border-zinc-800 bg-neutral-950 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-zinc-700">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Cultural</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-zinc-400">Message</label>
                <textarea name="message" required rows={6} className="mt-2 w-full rounded-lg border border-zinc-800 bg-neutral-950 px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-zinc-700" placeholder="Tell me about your site, scope, location, and timeline." />
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" disabled={status==='loading'} className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-6 py-3 font-medium hover:bg-zinc-200 transition disabled:opacity-60 disabled:cursor-not-allowed">
                  <Mail size={18} />
                  {status === 'loading' ? 'Sending…' : 'Send Inquiry'}
                </button>
                {status === 'success' && (
                  <p className="text-sm text-emerald-400">Thank you — your message has been received.</p>
                )}
                {status === 'error' && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-zinc-800 bg-neutral-950 p-6">
              <p className="text-sm text-zinc-400">Direct</p>
              <a href="mailto:studio@example.com" className="mt-2 block text-lg text-white hover:underline">studio@example.com</a>
            </div>
            <div className="rounded-2xl border border-zinc-800 bg-neutral-950 p-6">
              <p className="text-sm text-zinc-400">Location</p>
              <p className="mt-2 text-lg text-white">Open to global projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
