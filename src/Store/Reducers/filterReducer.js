export default function filterReducer(filter = {search: '', location: '', fulltime: false }, action) {
    switch(action.type){
        case 'change filter':
            return {...action.filter};
        default:
            return filter;
        
    }
}