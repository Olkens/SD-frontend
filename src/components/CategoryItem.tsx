import {BaseCategory} from '../types'

const CategoryItem: React.FC<{category: BaseCategory}> = (props) => {
 return(
    <>
    <p>{props.category.name}</p>
    <p>{props.category.color}</p>
    </>
 )
};

export default CategoryItem;