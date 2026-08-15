import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ExternalLink } from './ExternalLink';

describe('ExternalLink', () => {
  it('外部リンクとして安全な属性を付与する', () => {
    render(<ExternalLink href="https://example.com">Example</ExternalLink>);
    const link = screen.getByRole('link', { name: 'Example' });
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('unstyled variant では variant 由来の色クラスを付けない', () => {
    render(
      <ExternalLink href="https://example.com" variant="unstyled" className="text-gray-900">
        Icon
      </ExternalLink>
    );
    const link = screen.getByRole('link', { name: 'Icon' });
    expect(link.className).toContain('text-gray-900');
    expect(link.className).not.toContain('text-blue-600');
  });

  it('aria-label などの anchor 属性を透過する', () => {
    render(
      <ExternalLink href="https://x.com/tacky0612" variant="unstyled" aria-label="X">
        <span>icon</span>
      </ExternalLink>
    );
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument();
  });
});
