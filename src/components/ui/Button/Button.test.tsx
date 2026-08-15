import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('子要素を表示する', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('クリックでハンドラが呼ばれる', async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Press</Button>);
    await userEvent.click(screen.getByRole('button', { name: 'Press' }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disabled のときはクリックできずスタイルが変わる', async () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Disabled
      </Button>
    );
    const button = screen.getByRole('button', { name: 'Disabled' });
    expect(button).toBeDisabled();
    expect(button.className).toContain('cursor-not-allowed');
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('variant に応じたクラスが付与される', () => {
    render(<Button variant="success">Success</Button>);
    expect(screen.getByRole('button', { name: 'Success' }).className).toContain('bg-green-600');
  });

  it('任意の HTML 属性（aria-expanded など）を透過する', () => {
    render(<Button aria-expanded>Toggle</Button>);
    expect(screen.getByRole('button', { name: 'Toggle' })).toHaveAttribute('aria-expanded', 'true');
  });
});
