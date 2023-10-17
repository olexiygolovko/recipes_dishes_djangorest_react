import React, {useState, useEffect} from 'react';
import axios from "axios";



function Main() {
    const [isLoading, setLoading] = useState(true);  //axios result ready flag
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            setCategories(res.data);
            setLoading(false);
        });
    }, []);

    //If the flag isLoading = false then we output "Loading..."
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Otherwise, we display the data received from axios
    return (
        <>
        <h1>Dishes categories</h1>
        <div className="button">
            {categories.map((name) => (
                <a key={name.categoryType} className="s" href={`/category/${name.categoryType}`}>{name.categoryType}</a>
            ))}
        </div>
        </>
    );
}


export default Main
