//false means light theme
//true means dark theme

export default function themeReducer(theme = false, action) {
    switch(action.type){
        case 'change theme':
            return !theme;
        case 'set initial theme': 
            return action.theme;
        default: 
            return theme;
    }
}