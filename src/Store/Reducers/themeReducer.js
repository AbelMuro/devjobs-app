//false means light theme
//true means dark theme

export default function themeReducer(theme = false, action) {
    switch(action.type){
        case 'change theme':
            return !theme;
        default: 
            return theme;
    }
}