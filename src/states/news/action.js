import api from "../../utils/api"
import normalizeData from "../../utils/helper"
import { loadingDone, loadingStart } from "../loading/action"

const ActionType = {
    RECEIVE_NEWS : 'RECEIVE_NEWS'
}

function receiveNewsActionCreator(news) {
    return {
        type: ActionType.RECEIVE_NEWS,
        payload: {
            news,
        }
    }
}

const asyncReceiveNews = () => {
    return async (dispatch) => {
        dispatch(loadingStart())
        try {
            const newsAPI = await api.getNewsFromNewsAPI()
            const newsData = await api.getNewsFromNewsData()
            const GNews = await api.getNewsFromGNews()

            console.log("newsAPI", newsAPI)
            console.log("newsData", newsData)
            console.log("GNews", GNews)

            const normalizedNewsAPI = normalizeData(newsAPI, "format1")
            const normalizedNewsData = normalizeData(newsData, "format2")
            const normalizedGNews = normalizeData(GNews, "format3")


            const news = [
                ...normalizedNewsAPI, ...normalizedNewsData, ...normalizedGNews
            ]


            dispatch(receiveNewsActionCreator(news))
        } catch (error) {
            alert(error.message)
        } finally{
            dispatch(loadingDone())
        }
    }
}

const asyncFilterNews = (keyword) => {
  return async (dispatch, getState) => {
    try {
        dispatch(loadingStart())
        if (keyword === 'clear' || keyword.trim() === '') {
            await dispatch(asyncReceiveNews())
        }

        await dispatch(asyncReceiveNews())
        const state = getState()
        const news = state.news || []
        
        const filteredNews = news.filter((item) => 
          item.title.toLowerCase().includes(keyword.toLowerCase())
        )

        dispatch(receiveNewsActionCreator(filteredNews))
    } catch (error) {
      alert(error.message)
    } finally {
      dispatch(loadingDone())
    }
  }
}



export {
    ActionType, receiveNewsActionCreator, asyncReceiveNews, asyncFilterNews
}