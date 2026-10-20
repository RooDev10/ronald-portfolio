import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Contact from './Contact.jsx';
import profile from '../../data/profile.js';

describe('Contact', () => {
  it('muestra los datos de contacto definidos en profile', () => {
    render(<Contact />);

    expect(screen.getByText(profile.phone_display)).toBeInTheDocument();
    expect(screen.getByText(profile.email)).toBeInTheDocument();
    expect(screen.getByText(profile.discord_user)).toBeInTheDocument();
  });

  it('abre los enlaces web en una pestaña nueva segura', () => {
    render(<Contact />);

    for (const name of [/whatsapp/i, /discord/i]) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    }
  });

  it('usa mailto para el correo sin abrir una pestaña vacía', () => {
    render(<Contact />);

    const gmail = screen.getByRole('link', { name: /gmail/i });
    expect(gmail).toHaveAttribute('href', profile.email_url);
    expect(gmail).not.toHaveAttribute('target');
  });

  it('no tiene enlaces vacíos', () => {
    render(<Contact />);

    screen.getAllByRole('link').forEach((link) => {
      expect(link.getAttribute('href')).toBeTruthy();
    });
  });
});
