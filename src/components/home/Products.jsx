export default function Products({name, detail, price, details, height}){
    return(
        <div>
            <h2>{name}</h2>
            <p>{detail}</p>
            <span>{price}</span>
            <span>{details?.color}</span>
            <span>{details?.size}</span>
            <span>{details?.height}</span>
        </div>
    )
}
