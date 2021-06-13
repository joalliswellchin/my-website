# How to add a theme in this website

You can do 1 of 2 things

1. Insert a new key-value pair to an existing theme. For example:

* **(a)** add this to the ButtonTheme
```
{
    root: {
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
    },
     .
     .
     .
     your_new_key: {
         your_new_material_theme_values
         now_mostly_used_as_css_theme
     }
}
```

* **(b)** import in your new component with:
```javascript
import { ButtonTheme } from "../Themes/theme";

// ... some code
const useStyles = ButtonTheme

export default function Topnav() {
    const classes = useStyles();
    return <div className={classes.header}>Some Text here</div>
}
```

2. Create your own Theme
* **(a)** add this to the NewTheme (follow documentation here https://material-ui.com/customization/theming/)
```
import { makeStyles } from '@material-ui/core/styles';

export const NewTheme = makeStyles((theme) => (
    {
        your_new_key: {
            your_new_material_theme_values
            now_mostly_used_as_css_theme
        }
    }
));
```

* **(b)** import in your new component with:
```javascript
import { NewTheme } from "../Themes/theme";

// ... some code

// you could potentially do this, but the idea is to get the key from the import function from theme.js
return <div className={NewTheme().header}>Some Text here</div>
```