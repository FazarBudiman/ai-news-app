import { ActionType } from "./action";

function newsReducer(news = [], action= {}) {
    switch (action.type) {
        case ActionType.RECEIVE_NEWS:
            return action.payload.news
    
        default:
            return news
    }
}

export default newsReducer