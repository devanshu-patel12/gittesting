import './Card.css'
type CardPropsType = {
    name: string
    age: number
    productName: string
    productPrice: number
}
function Card({ name, age, productName, productPrice, title }: CardPropsType) {

    return (
        <>
            <div className="card">
                <p>Title : {title}</p>
                <h5>Name : {name}</h5>
                <h3>Age : {age}</h3>
                <h2>Product Chosen: {productName}</h2>
                <h3>It's Price: {productPrice}</h3>
            </div>

        </>
    )
}

export default Card