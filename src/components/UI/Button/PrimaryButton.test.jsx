import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import PrimaryButton from './PrimaryButton.jsx';

describe('PrimaryButton', () => {
  it('abre los enlaces web en una pestaña nueva segura', () => {
    render(<PrimaryButton text="CV" url="https://example.com/cv" color="#18C4EA" />);

    const link = screen.getByRole('link', { name: 'CV' });
    expect(link).toHaveAttribute('href', 'https://example.com/cv');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('no abre pestaña nueva para enlaces mailto', () => {
    render(<PrimaryButton text="Contáctame" url="mailto:test@example.com" color="#172A41" />);

    const link = screen.getByRole('link', { name: 'Contáctame' });
    expect(link).toHaveAttribute('href', 'mailto:test@example.com');
    expect(link).not.toHaveAttribute('target');
    expect(link).not.toHaveAttribute('rel');
  });
});
