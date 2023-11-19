import { Link, useParams } from "react-router-dom";

import styles from './DetailsPage.module.css';
import mainStyle from '../../App.module.css';
import { useEffect, useState } from "react";

import * as itemsService from '../../services/itemsService';

export default function DetailsPage() {
    const [item, setItem] = useState({});

    const { collectionName, itemId } = useParams();

    useEffect(() => {
        itemsService.getItemById(collectionName, itemId)
            .then(setItem)
            .catch(err => console.log(err));
    }, [itemId]);

    return (
        <section className={styles.details}>
            <div className={styles["details-wrapper"]}>
                <div className={styles["img-wrapper"]}>
                    <img src={item.imageUrl} />
                    <div>
                        <p>{item.likesAmount} Likes</p>
                    </div>
                </div>
                <div className={styles["info-wrapper"]}>
                    <div>
                        <p className={styles["details-title"]}>Name: {item.name}</p>
                        <p>Price: <span className={styles["details-price"]}>€{item.price}</span></p>
                        <p>Description: <span className={styles["details-description"]}>{item.description}</span></p>
                    </div>
                    <div className={styles["action-buttons"]}>
                        <Link to={`/${itemId}/edit-item`} className={mainStyle.button}>Edit</Link>
                        <Link to={`/${itemId}/delete-item`} className={mainStyle.button}>Delete</Link>
                        {/* Have to disable the Like button once it is clicked! */}
                        <Link to={`/${itemId}/like`} className={mainStyle.button}>Like</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}