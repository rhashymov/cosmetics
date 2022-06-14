import { useDispatch, useSelector } from "react-redux"
import { getCosmetics } from "../../redux/reducer"
import { Row, Col, Card } from "antd";
import { useEffect, useState } from 'react';
const Meta = Card.Meta




const Cosmetics = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => state.cosmetics)
    const cosmetics = useSelector(state => state.cosmetics.cosmetics)

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageNumber, setPageNumber] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(30)

    useEffect(() => { async () => {
            setLoading(true)
            const res = await dispatch(getCosmetics())
            setItems(res)
            setLoading(false)
        }
    }, [])

    return <>
        <main>
            <Row gutter={[16, 16]}>
                {/* {
                    items.map(u => {
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
                } */}
            </Row>

        </main>
    </>
}

export default Cosmetics