import { Card, CardHeader } from '@mui/material';
import BookMedia from './BookMedia'

export default function BookTile({book}) {
    return (
        <div>
            <Card>
                <BookMedia bookISBN={book.ISBN}/>

                <CardHeader 
                    title={book.title}
                    subheader={book.authorName}/>
            </Card>
        </div>
    )
}