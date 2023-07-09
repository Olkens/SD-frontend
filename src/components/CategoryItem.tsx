import {BaseCategory} from '../types'

const CategoryItem: React.FC<{category: BaseCategory}> = (props) => {
 return(
    <>
    <p>{props.category.name}</p>
    <p>{category.color}</p>
    </>
 )
};

export default CategoryItem;