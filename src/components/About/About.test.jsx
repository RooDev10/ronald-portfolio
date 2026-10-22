import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import About from './About.jsx';
import about from '../../data/about.js';

describe('About', () => {
  it('al hacer clic en el mazo pasa a la siguiente foto y vuelve a la primera', async () => {
    const user = userEvent.setup();
    render(<About />);

    const deck = screen.getByRole('button', { name: /ver siguiente foto/i });
    expect(screen.getByText(about.photos[0].title)).toBeInTheDocument();

    for (let step = 1; step <= about.photos.length; step++) {
      await user.click(deck);
      const expected = about.photos[step % about.photos.length];
      expect(screen.getByText(expected.title)).toBeInTheDocument();
    }
  });

  it('muestra la descripción dividida en párrafos', () => {
    render(<About />);

    about.paragraphs.forEach((paragraph) => {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    });
  });

  it('muestra las tres tarjetas de pilares', () => {
    render(<About />);

    about.pillars.forEach((pillar) => {
      expect(screen.getByRole('heading', { name: pillar.title })).toBeInTheDocument();
    });
  });
});
