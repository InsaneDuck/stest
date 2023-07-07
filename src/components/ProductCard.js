import styles from "./ProductCard.module.css"
const ProductCard = ({key,productId,sku,title,price,image}) => {

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardContent}>
                    <div className={styles.imageContainer}>
                        {image? <img src={image}  alt={"ProductImage"}/>:
                            <div>Product Image</div>}
                    </div>
                    <p className={styles.cardText}>{title}, {sku}, {price}</p>
                    <button className={styles.addToCartButton}>Add to Basket</button>
                </div>
            </div>
        </>
    )
};

export default ProductCard;