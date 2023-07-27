import { render, screen } from '@testing-library/react';
import { UnitTests } from './UniteTests';

describe('UnitTest', () => {
  test('loads and displays Header with result', async () => {
    // ARRANGE
    render(<UnitTests />);

    // ASSERT
    expect(screen.getByRole('heading')).toHaveTextContent('Unit Tests');
    expect(screen.getByRole('result-value')).toHaveTextContent('result: 25.64');
  });
});
