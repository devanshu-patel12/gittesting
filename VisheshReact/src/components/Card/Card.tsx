import "./Card.css";
type CardPropsType = {
    name: string;
    age: number;
    productName: string;
    productPrice: number;
};
function Card({ name, age, productName, productPrice }: CardPropsType) {
<<<<<<< HEAD
<<<<<<< HEAD

    return (
        <>
            <div className="card">
                <h5>Name : {name}</h5>
=======
    return (
        <>
            <div className="card">
                <p>Name and Surname : {name}</p>
>>>>>>> a9fc1127a51bd4f2d84601fd0e96dc8900e985e4
                <h3>Age : {age}</h3>
                <h2>Product Chosen: {productName}</h2>
                <h3>It's Price: {productPrice}</h3>
            </div>
<<<<<<< HEAD

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
=======
        </>
    );
>>>>>>> a9fc1127a51bd4f2d84601fd0e96dc8900e985e4
}

export default Card;
