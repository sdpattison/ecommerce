import "./collectionPreview.styles.scss";
import CollectionItem from "../CollectionItemComponent/CollectionItem";

const CollectionPreview = ({title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(({id, ...item})=>{
                    return(
                        <CollectionItem key={id} {...item} />
                    );
                })}
            </div>
        </div>
    );
}

export default CollectionPreview;