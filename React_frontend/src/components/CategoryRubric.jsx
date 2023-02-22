import React, {useState, useEffect} from 'react';
import axios from "axios";



function Main() {
    const [isLoading, setLoading] = useState(true);  // Флаг готовности результата axios
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/categories/").then(res => {
            setCategories(res.data);
            setLoading(false);
        });
    }, []);

    // Если флаг isLoading = false то выводим "Loading..."
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // Иначе выводим полученные из axios данные
    return (
        <>
        <h1>Категории блюд</h1>
        <div className="button">
            {categories.map((name) => (
                <a key={name.categoryType} className="s" href={`/category/${name.categoryType}`}>{name.categoryType}</a>
            ))}
        </div>
        </>
    );
}


export default Main
