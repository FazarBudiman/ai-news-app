import PropTypes from 'prop-types'
import {List} from 'antd'
import dayjs from 'dayjs';
import {CalendarFilled} from '@ant-design/icons';
import IconText from './IconText';

const ListNews = ({data}) => {
  return (
    <List
        // style={{padding: '0 2em'}}
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText icon={CalendarFilled} text={dayjs(item.publishedAt).format('DD-MMMM-YYYY')} key="list-vertical-message" />,
            ]}
            extra={
              item.image !== null &&
              <img
                width={272}
                alt="logo"
                src={item.image}
              />
            }
          >
            <List.Item.Meta
              title={<a href={item.url} target="_blank">{item.title}</a>}
              description={item.source}
            />
            {item.description}
          </List.Item>
        )}
      />
  )
}

ListNews.propTypes = {
    data: PropTypes.array.isRequired
}

export default ListNews;