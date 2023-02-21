import React, {useState, useEffect,} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import Main from './Main';


function Recipe() {

    const id = useParams().id;
    const [isLoading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState();


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/recipe/${id}`).then(res => {
            setRecipe(res.data);
            setLoading(false);
        });
    }, []);


    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    return (
        <>
            <Main />
            <h2 class='title-recipe'>{recipe.name}:</h2>
            <div className='recipe'>
                <text style={{ whiteSpace: "pre-line" }}>{recipe.recipe}</text>
            </div>
        </>
    );
};

export default Recipe;
