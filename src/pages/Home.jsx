import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { asyncFilterNews,} from "../states/news/action"
import ListNews from "../components/ListNews";
import { Empty, Space, Spin, Typography  } from "antd";
import SearchBar from "../components/SearchBar";
import { useSearchParams } from "react-router-dom";
const {Title, Text} = Typography

const Home = () => {
  const {news = [], loading} = useSelector((states) => states)
  const dispatch = useDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const keyword = searchParams.get("q") || ""

  useEffect(() => {
    dispatch(asyncFilterNews(keyword))
  }, [dispatch, keyword])
  return (
    <>
      <SearchBar onSearch={(kw) => setSearchParams({q: kw})} />

      <Space direction="vertical" style={{ width: "100%" }}>
        { keyword &&
          <Title level={4}>
             Hasil Pencarian: <Text mark>{keyword}</Text>
          </Title>   
        }

        <Spin spinning={loading.loading} tip='Load Data' size="large">
          {news.length === 0 ? (
            <Empty description={`Tidak ada berita untuk ditampilkan`} />
          ) : (
            <ListNews data={news} />
          )}
        </Spin>
      </Space>
    </>
    
  )
}

export default Home