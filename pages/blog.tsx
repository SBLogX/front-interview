import { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import styled from 'styled-components';

import Layout from '../components/Layout';
import Post from '../components/Post';

const SearchArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const SearchField = styled.input`
    width: 70%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    outline: none;
`;

const SearchSelector = styled.select`
    width: 25%;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 1rem;
`;

const sortDate = (a, b) => {
    const a_date = Date.parse(a.date) || 0;
    const b_date = Date.parse(b.date) || 0;

    return b_date - a_date;
};

const handleChange = ({ target }, setter) => {
    const { value } = target;
    setter(value);
};

const Blog = ({ posts }) => {
    const [filterBy, setFilterBy] = useState('');
    const [order, setOrder] = useState('asc');

    return (
        <Layout>
            <h1 data-testid="page-title">Blogs</h1>
            <SearchArea>
                <SearchField
                    type="text"
                    placeholder="filter posts..."
                    onInput={e => handleChange(e, setFilterBy)}
                />
                <SearchSelector onChange={e => handleChange(e, setOrder)}>
                    <option value="asc">Asc</option>
                    <option value="desc">Desc</option>
                </SearchSelector>
            </SearchArea>
            {
                posts
                    .sort((a, b) => {
                        const a_date = Date.parse(a.date) || 0;
                        const b_date = Date.parse(b.date) || 0;
                    
                        return order === 'asc'
                            ? b_date - a_date
                            : a_date - b_date;
                    })
                    .map(post => {
                        const { id, title } = post;
                        const searchTerm = filterBy.toLowerCase();
                        const postName = title.toLowerCase();

                        if (!postName.indexOf(searchTerm)) return <Post key={id} {...post} />;
                    })
            }
        </Layout>
    );
}

Blog.getInitialProps = async function() {
    const url = 'https://upply-interview.herokuapp.com/'
    const res = await fetch(url);
    const data = await res.json();

    console.log(Date.parse('2016-03-01T12:00'))

    return {
        posts: data.map(post => post).sort(sortDate)
    };
};

export default Blog;
