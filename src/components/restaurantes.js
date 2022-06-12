import React, {useState} from "react";
import Restaurante from "./restaurante";
import Comentarios from "./comentarios";

const Restaurantes = () => {
    const [restaurantes,setRestaurantes]= useState([
        {
        id: 0,
        name:'Uthappizza',
        image: 'assets/images/uthappizza.png',
        category: 'mains',
        label:'Hot',
        price:'4.99',
        description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]                        },
        {
        id: 1,
        name:'Zucchipakoda',
        image: 'assets/images/zucchipakoda.png',
        category: 'appetizer',
        label:'',
        price:'1.99',
        description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        },
        {
        id: 2,
        name:'Vadonut',
        image: 'assets/images/vadonut.png',
        category: 'appetizer',
        label:'New',
        price:'1.99',
        description:'A quintessential ConFusion experience, is it a vada or is it a donut?',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        },
        {
        id: 3,
        name:'ElaiCheese Cake',
        image: 'assets/images/elaicheesecake.png',
        category: 'dessert',
        label:'',
        price:'2.99',
        description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms',
        comments: [
            {
            id: 0,
            rating: 5,
            comment: "Imagine all the eatables, living in conFusion!",
            author: "John Lemon",
            date: "2012-10-16T17:57:28.556094Z"
            },
            {
            id: 1,
            rating: 4,
            comment: "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
            author: "Paul McVites",
            date: "2014-09-05T17:57:28.556094Z"
            },
            {
            id: 2,
            rating: 3,
            comment: "Eat it, just eat it!",
            author: "Michael Jaikishan",
            date: "2015-02-13T17:57:28.556094Z"
            },
            {
            id: 3,
            rating: 4,
            comment: "Ultimate, Reaching for the stars!",
            author: "Ringo Starry",
            date: "2013-12-02T17:57:28.556094Z"
            },
            {
            id: 4,
            rating: 2,
            comment: "It's your birthday, we're gonna party!",
            author: "25 Cent",
            date: "2011-12-02T17:57:28.556094Z"
            }
        ]
        }
    ]);
    const [show, setShow]= useState(false);
    const showComments =()=>{
        setShow(!show);
    }
    let showComment= null;
    if (show) {
        showComment =(restaurantes.map(restaurante =>{
            return restaurante.comments.map(comment =>{
                return(
                    <div>
                        <h2>Comments</h2>
                        <Restaurante key={restaurante.id} image={restaurante.image}/>
                        <Comentarios key={restaurante.comments.id} comment={comment.comment} author={comment.author}/>
                    </div>
                    
                )
            })
        }))
    }
    else {
        showComment=null;
    }

    return (
    <div className="row">
        {showComment}
        
        <div className="col-3">
            {restaurantes.map((restaurante)=>{
                return (
                    <div>
                        <div className="container">{showComment}</div>
                        <Restaurante key={restaurante.id} image={restaurante.image} name={restaurante.name} description={restaurante.description} />
                        <button key={restaurante.id} type="button" onClick={showComments} className="btn btn-primary">boton</button>  
                    </div>
                )
            })}
          
        </div>
        
        
    </div>
    );
};

export default Restaurantes;