import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import { Container, FormGroup, FormLabel } from '@mui/material';

function SearchBar({setBooks}) {
    const [searchString, setSearchString] = useState('');
    const fields = '&fields=isbn,title,author_name,cover_i,number_of_pages_median,first_publish_year'

    const rawURL = 'https://openlibrary.org/search.json?';
    const params = {'q': '', 'limit': 12};
    
    async function fetchBooks(searchString) {
        params['q'] = searchString;
        const url = new URL(rawURL + new URLSearchParams(params) + fields);
        const response = await fetch(url, {'mode': 'cors'});
        const responseJSON = await response.json();
        const data = await responseJSON['docs'].map((book) => {
            return {
                ISBN: book['isbn'] ? book['isbn'][0] : '',
                title: book['title'] ? book['title'] : 'Placeholder',
                authorName: book['author_name'] ? book['author_name'][0]: '',
                numPages: book['number_of_pages_median'] ? book['number_of_pages_median'] : '',
                coverID: book['cover_i'] ? book['cover_i'] : -1,
                yearPublished: book['first_publish_year'] ? book['first_publish_year'] : '',            }
        });
        await setBooks(data);
    };

    const handleSearchStringChange = (event) => {
        setSearchString(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetchBooks(searchString);
    };

    return (
        <>
        <Container>
            <form onSubmit={(e) => {handleSubmit(e)}} style={{'padding': 20}}>
                <FormGroup>
                    <TextField 
                    type="text" 
                    variant="outlined" 
                    defaultValue={searchString}
                    placeholder='Enter book, author or other relevant search fields'
                    onChange={(e) => {handleSearchStringChange(e)}}/>      
                </FormGroup>
            </form>
        </Container>
        </>

    )
}

export default SearchBar;