import { makeStyles } from '@material-ui/core/styles';

export const ButtonTheme = makeStyles((theme) => (
    {
        root: {
            ...theme.typography.button,
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
        header: {
            ...theme.typography.button,
            backgroundColor: theme.palette.primary,
            color: '#bdbcbc',
            padding: theme.spacing(1),
            '&:hover': {
                background:'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                color: '#676666',
                backgroundSize: '400% 400%',
                animation: `$fadingGradient 5s ${theme.transitions.easing.easeInOut} infinite`,
            },
        },
        '@keyframes fadingGradient': {
            '0%': {
                backgroundPosition: '0% 50%',
            },
            '50%': {
                backgroundPosition: '100% 50%',
            },
            '100%': {
                backgroundPosition: '0% 50%',
            },
        }
    }
));