import { BackstageTheme } from '@backstage/theme';
import {
  styled,
  Card as CardUI,
  Chip as ChipUI,
  Typography,
} from '@material-ui/core';

export const Card = styled(CardUI)({
  display: 'flex',
  flexDirection: 'column',
  marginTop: 16,
  backgroundColor: 'rgb(242, 242, 242)',
});

export const CardText = styled(Typography)({
  color: '#101419',
});

type ChipColorStyles = {
  [x: string]: string;
};

export const Chip = styled(ChipUI)(
  ({ theme, label }: { theme: BackstageTheme; label: string }) => {
    const type = label.split(':')[0];

    const colorForViolation: ChipColorStyles = {
      must: theme.palette.error.main,
      should: theme.palette.warning.dark,
      may: theme.palette.success.main,
    };

    return {
      border: `1px solid ${colorForViolation[type]}`,
      color: '#212121',
      backgroundColor: '#fff',
      textTransform: 'capitalize',
      fontSize: '12px',
    };
  },
);
