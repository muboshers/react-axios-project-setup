import styled, { css } from 'styled-components';
import { colors, shadows } from '../../config/theme';
import { weight } from '../typography/typography.style';

const borderRadius = {
  none: css`
    border-radius: 0;
  `,
  border_10: css`
    border-radius: 10px;
    border: none;
  `,
  border_50: css`
    border-radius: 50%;
    border: none;
  `,
};

const align = {
  start: css`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    cursor: pointer;
  `,
  center: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
  `,
  last: css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    cursor: pointer;
  `,
};

const padding = {
  none: css`
    padding: 0;
  `,
  padding_10: css`
    padding: 10px;
  `,
  padding_15_30: css`
    padding: 15px 30px;
  `,
};

const border = {
  none: css`
    border: none;
  `,
  border_white: css`
    border: 1px solid #fff;
  `,
  border_blue: css`
    border: 1px solid #2091f9;
  `,
};

const size = {
  normal: css`
    font-size: 16px;
    line-height: 24px;
  `,
};

const background = {
  ...colors,
  primary: '#2091F9',
  simpleTextBackground: '#ffffff',
  lighterBackground: 'rgba(0, 0, 0, 0.1)',
  lightBackground: 'rgba(0, 0, 0, 0.2)',
  cardLaidButton: 'rgba(232, 232, 232, 0.46)',
  grayBackground: 'rgba(176, 176, 176, 0.46)',
  backgroundGrayDark: '#E8E8E8',
  iconBackground: '#E9E9E9',
  transparent: 'transparent',
  facebookButton: '#3950C5',
};

export const ButtonMain = styled.button`
  color: ${(props) => colors[props.color]};
  ${(props) => borderRadius[props.borderRadius]};
  ${(props) => align[props.align]}
  ${(props) => props.border && border[props.border]}
  ${(props) => props.size && size[props.size]}
  ${(props) => padding[props.padding]}
  font-weight: ${(props) => props.textWeight && weight[props.textWeight]};
  background: ${(props) => background[props.background]};
  width: ${(props) => props.width};
  box-shadow: ${(props) => props.shadow && shadows[props.shadow]};
`;
