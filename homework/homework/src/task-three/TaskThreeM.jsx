import React, { useState, useEffect } from 'react';
import './TaskThree.css';

const useCustomHook = (search) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const controller = new AbortController();

    const fetchData = async (search) => {
        setLoading(true);
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?search=${search}`, { signal: controller.signal });
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const debounce = setTimeout(() => {
            fetchData(search);
        }, 500);

        return () => {
            clearTimeout(debounce);
            controller.abort();
        };
    }, [search]);

    return { posts, loading, error, fetchData };
};

export default function TaskThree() {
    const [search, setSearch] = useState('');
    const { posts, loading, error, fetchData } = useCustomHook(search);

    const handleSearch = (event) => {
        const searchText = event.target.value;
        setSearch(searchText);
    };

    useEffect(() => {
        fetchData(search);
    }, [search]);

    return (
        <div className="TaskThree">
            <input type="text" onChange={handleSearch} placeholder="Search posts" />
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <h1>Posts</h1>
            <ul>
                {posts.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
}
