import { useDispatch, useSelector } from "react-redux"
import { getCosmetics } from "../../redux/reducer"
import { Row, Col, Pagination } from 'antd'
import { Card } from 'antd';
import {useState} from 'react';
import 'antd/dist/antd.css'; 
import ReactPaginate from 'react-paginate'
const { Meta } = Card;




const Cosmetics = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.cosmetics)
    const cosmetics = useSelector(state => state.cosmetics.cosmetics)
    // let pagesCount= Math.ceil(cosmetics.lenght/state.pageSize)
    const getC = () => {
        dispatch(getCosmetics())
    }
    // const itemRender = (_, type, originalElement) => {
    //     if (type === 'prev') {
    //       return <a>Previous</a>;
    //     }
      
    //     if (type === 'next') {
    //       return <a>Next</a>;
    //     }
      
    //     return originalElement;
    //   };
    const [items, setItems] = useState(cosmetics.slice(0,50))
    
    const [pageNumber, setPageNumber] = useState(0)

    const itemsPerPage = 30
    const pagesVisited = pageNumber * itemsPerPage

    const displayItems = items.slice(pagesVisited, pagesVisited + itemsPerPage).map((u) => {
        debugger
        return (
            <Col span={4} key={u.id}>
                <Card
                    hoverable
                    style={{
                        width: 100,
                    }}
                    cover={<img alt="example" src={u.images.smallIcon} />}
                >
                    <Meta title={u.name} description={u.id} />
                </Card>
            </Col>)
    })

    return <>
        <main>
        {/* <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                
                             }}>{p}</span>
            })}
        </div> */}
            <div><button onClick={getC}></button></div>
            <div>
            {/* <Pagination total={500} itemRender={itemRender} /> */}
            </div>
            <Row gutter={[16, 16]}>
                {displayItems}
            </Row>
        </main>
    </>
}

export default Cosmetics