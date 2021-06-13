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
                background:theme.palette.secondary,
                color: '#676666',
            },
        },
    }
));