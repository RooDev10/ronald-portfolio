import { describe, expect, it } from 'vitest';
import profile from './profile.js';

describe('profile', () => {
  it.each(['git_url', 'linkedin_url', 'ig_url', 'cv_url', 'discord_url'])(
    '%s es una URL https válida',
    (key) => {
      const url = new URL(profile[key]);
      expect(url.protocol).toBe('https:');
    }
  );

  it('whatsapp_url apunta a wa.me con un número', () => {
    expect(profile.whatsapp_url).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
  });

  it('email_url es un mailto al correo del perfil', () => {
    expect(profile.email_url.startsWith(`mailto:${profile.email}?`)).toBe(true);
  });
});
