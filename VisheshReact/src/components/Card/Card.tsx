import "./Card.css";
type CardPropsType = {
  name: string;
  age: number;
  productName: string;
  productPrice: number;
};
function Card({ name, age, productName, productPrice }: CardPropsType) {
<<<<<<< HEAD

    return (
        <>
            <div className="card">
                <h5>Name : {name}</h5>
                <h3>Age : {age}</h3>
                <h2>Product Chosen: {productName}</h2>
                <h3>It's Price: {productPrice}</h3>
            </div>

        </>
    )
=======
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
>>>>>>> 4d44309c48a401b54c454af2ae9bfcc43d074572
}

export default Card;
