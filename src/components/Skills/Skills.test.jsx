import { describe, expect, it } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import Skills from './Skills.jsx';
import skills from '../../data/skill.js';
import techIcons from '../../data/techIcons.js';

describe('Skills', () => {
  it('muestra todas las categorías y tecnologías sin necesidad de hacer clic', () => {
    render(<Skills />);

    skills.forEach((skill) => {
      const card = screen.getByRole('heading', { name: skill.category }).closest('article');

      skill.skills_list.forEach((tech) => {
        expect(within(card).getByText(tech)).toBeInTheDocument();
      });
    });
  });

  it('tiene un ícono definido para cada tecnología', () => {
    skills.flatMap((skill) => skill.skills_list).forEach((tech) => {
      expect(techIcons[tech], tech).toBeDefined();
    });
  });
});
