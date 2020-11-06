import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Rule from './Rule';
import rules from '../../data.json';

describe('Rule', () => {
    const rule = rules[0];
    it('should render well', () => {
        const { getByText, container } = render(<Rule rule={rule} />);

        const title = getByText(rule.title);
        expect(title).toBeInTheDocument();

        const description = container.querySelector('.panel-body');
        expect(description).toHaveTextContent(rule.description);
    })

    it('should handle title click', () => {
        const component = render(<Rule rule={rule} />);

        const title = component.getByText(rule.title);
        const description = component.getByText(rule.description);

        fireEvent.click(title);

        expect(description.parentNode).toHaveClass('hidden');
    })
})