import {BaseProduct} from '../types'

const ProductItem: React.FC<{product: BaseProduct}> = (props) => {
    return (
        <>
        <h1>{product.name}</h1>
        </>
    )
}

export default ProductItem