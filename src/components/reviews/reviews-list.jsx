import styles from "./reviews.module.css";
import {Review} from "../review/review.jsx";

export const ReviewsList = ({reviews}) => reviews.map(review => <div key = {review.id} className = {styles.review}><Review review = {review} /></div>);