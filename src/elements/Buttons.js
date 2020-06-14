import styled from 'styled-components';
import { applyStyleModifiers } from 'styled-components-modifiers';
import { lighten } from 'polished';
import { elevation, social } from '../utilities';

const BUTTON_MODIFIERS = {
  small: () => `
    margin-left: 10px;
    font-size: 1rem;
    padding: 3px 10px;
  `,

  cancel: ({ theme }) => `
    background: ${theme.colors.secondary};
  `,

  standard: ({ theme }) => `
    background: ${theme.colors.primary}
  `,
};

export const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: ${social.light};
  font-size: 2rem;
  border: none;
  transition: 0.3s ease box-shadow;
  background: ${(props) => props.theme.colors.primary};
  ${elevation[1]};

  ${({ typeStyle }) => {
    if (typeStyle === 'yes') {
      return `
        border-radius: 4px;

        &:hover {
          background: ${lighten(0.2, 'tomato')};
          ${elevation[2]};
        }
      `;
    }
  }}

  ${applyStyleModifiers(BUTTON_MODIFIERS)}
`;

export const CancelButton = styled(Button)`
  outline: none;
  margin: 10px 0 0 30px;
`;
