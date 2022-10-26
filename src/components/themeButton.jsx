import Button from 'react-bootstrap/Button';
import ThemeButtonWrapper from '../styles/ThemeButtonWrapper';

const ThemeButton = ({ appTheme, onClick }) => (
    <ThemeButtonWrapper>
        <Button onClick={onClick} className='themeButton'>
            <span className='themeButtonLogo'>{appTheme ? '🌞' : '🌙'}</span>
        </Button>
    </ThemeButtonWrapper>);

export default ThemeButton;
