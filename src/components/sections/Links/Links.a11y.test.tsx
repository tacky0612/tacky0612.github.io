import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { axe } from 'vitest-axe';
import Links from './Links';

describe('Links アクセシビリティ', () => {
  it('アイコンリンクにアクセシブルな名前があり axe 違反がない', async () => {
    const { container } = render(<Links />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
