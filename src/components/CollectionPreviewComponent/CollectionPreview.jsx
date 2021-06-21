import "./collectionPreview.styles.scss";

const CollectionPreview = ({title, items}) =>{
    return(
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map(({id, ...item})=>{
                    return(
                        <div className="item" key={id}>{item.name}</div>
                    );
                })}
            </div>
        </div>
    );
}

export default CollectionPreview;