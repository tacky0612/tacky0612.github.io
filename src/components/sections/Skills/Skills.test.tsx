import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Skills from './Skills';

describe('Skills', () => {
  it('初期状態ではスキル一覧は非表示', () => {
    render(<Skills />);
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });

  it('トグルボタンでプログラミングスキルを開閉できる', async () => {
    render(<Skills />);
    const toggle = screen.getByRole('button', {
      name: /Programming Language/,
    });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('React')).toBeInTheDocument();

    await userEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(screen.queryByText('React')).not.toBeInTheDocument();
  });
});
