// import { useState, useEffect } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import axios from 'axios'
// import Layout from '../shared/Layout'
// import ItemForm from '../shared/ItemForm'


// function ItemEdit() {
//     const navigate = useNavigate()
//     const {id} = useParams() // get the id from the current object
//     const [item, setItem] = useState({
//         title: '',
//         link: ''
//     })
//     const [updated, setUpdated] = useState(false)

//     useEffect(() => {
//         const fetchData  = async () => {
//             try {
//                 const response = await axios(`http://localhost:3000/api/items/${id}`)
//                 console.log('itemEdit', response);
//                 setItem(response.data)
//             } catch (error) {
//                 console.error(error)
//             }

//         }

//         fetchData()

//     }, [])

//     const handleChange = (event) => {
//         const updatedField = { [event.target.name] : event.target.value }
//             // created a placeholder grabbing the value from the user input form
//         const editedItem = Object.assign(item, updatedField)
//             // assigned the empty state with the updatedField into one object
//         setItem(editedItem)
//             // assigned the new object to be updated to the state
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()

//         axios({
//             url:`http://localhost:3000/api/items/${id}`,
//             method: 'PUT',
//             data: item
//         }).then(() => setUpdated(true)).catch(console.error)
//     }

//     useEffect(() => {
//         if(updated) {
//             return navigate(`/items/${id}`)
//         }
//     }, [])

//     return (
//         <Layout>
//             <ItemForm
//                 item={item}
//                 handleChange={(e) => handleChange(e)}
//                 handleSubmit={(e) => handleSubmit(e)}
//                 cancelPath={`/items/${id}`}        
            
//             />
//             <h4>{item.title}</h4>
//             <p>Link: {item.link}</p>
//         </Layout>
//     )



// }
// export default ItemEdit


// my code

import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'
import Layout from '../shared/Layout';
import ItemForm from '../shared/ItemForm';

function ItemEdit() {
    const navigate = useNavigate();
    const {id} = useParams()
    const [item, setItem] = useState({
        title: "",
        link: ""
    })


const [updated, setUpdated] = useState(false)

useEffect(()=> {
    const fetchData = async() => {
    try{
        const response = await axios(`http://localhost:3000/api/items/${id}`)
        console.log('itemEdit', response);
        setItem(response.data)
    }catch (err) {
        console.error(err)
    }
}
fetchData()
}, [])


const handleChange = (event) => {
    const updatedField = { [event.target.name] : event.target.value }
    const editedItem = Object.assign(item, updatedField)
    setItem(editedItem)
}

const handleSubmit = (event) => {
    event.preventDefault()
    axios({
        url: `http://localhost:3000/api/items/${id}`,
        method: 'PUT',
        data: item
    }).then(() => setUpdated(true)).catch(console.error)

}

useEffect(() => {
    if (updated) {
        return navigate(`/items/${id}`)
    }
}, [])

return (
    <Layout>
    <ItemForm
    item = {item}
    handleChange={(e) => handleChange(e)}
    handleSubmit={(e) => handleSubmit(e)}
    cancelPath = {`/items/${id}`}
    />
    <h4>{item.title}</h4>
    <p>Link: {item.link}</p>
    </Layout>
)
}

export default ItemEdit