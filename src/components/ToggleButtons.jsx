import Button from 'react-bootstrap/Button';

export const ThemeButton = ({ appTheme, onClick }) => (
    <Button onClick={onClick} className='topButton'>
        <span className='buttonLogo'>{appTheme ? '🌞' : '🌙'}</span>
    </Button>
);

export const MuteButton = ({ muteMe, onClick }) => (
    <Button onClick={onClick} className='topButton'>
        <span className='buttonLogo'>{muteMe ? '🔇' : '🔊'}</span>
    </Button>
);

export const TickleButton = ({ tickleMe, onClick }) => (
    <Button onClick={onClick} className='topButton'>
        <span className='buttonLogo'>{tickleMe ? '⏸' : '▶️'}</span>
    </Button>
);
