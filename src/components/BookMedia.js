import { useEffect, useState } from "react";
import { CardMedia } from "@mui/material";


export default function BookMedia({bookISBN}) {
    const [image, setImage] = useState();
    const url = `https://covers.openlibrary.org/b/isbn/${bookISBN}-L.jpg`;


    async function fetchImage() {
        if (!bookISBN) {
            setImage('/black.jpg');
        } else {
            const response = await fetch(url);
            const responseBlob = await response.blob();
            const imgUrl = URL.createObjectURL(responseBlob)
            setImage(imgUrl);
        }
    }

    useEffect(() => {
        fetchImage();
    }, [bookISBN])

    if (!image) return
    return (
        <CardMedia
            component="img"
            alt="book cover"
            height="180"
            image={image} />
    );
}