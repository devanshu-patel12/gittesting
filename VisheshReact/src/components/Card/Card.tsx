import "./Card.css";
type CardPropsType = {
    name: string;
    age: number;
    productName: string;
    productPrice: number;
};
function Card({ name, age, productName, productPrice }: CardPropsType) {
    return (
        <>
            <div className="card">
                <p>Name and Surname : {name}</p>
                <h3>Age : {age}</h3>
                <h2>Product Chosen: {productName}</h2>
                <h3>It's Price: {productPrice}</h3>
            </div>
        </>
    );
}

export default Card;
