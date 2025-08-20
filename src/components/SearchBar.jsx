import { Col, Row } from 'antd';
import Search from 'antd/es/input/Search'
import PropTypes from 'prop-types';

const SearchBar = ({onSearch}) => {
    return (
        <Row justify={'center'} style={{margin: '2rem 0 3rem'}}>
            <Col xs={22} sm={22} md={16} xl={14} xxl={18}>
            <Search
                placeholder="cari judul berita"
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                
            />
            </Col>
        </Row>
    )
}

SearchBar.propTypes = {
  data: PropTypes.func.isRequired
}

export default SearchBar