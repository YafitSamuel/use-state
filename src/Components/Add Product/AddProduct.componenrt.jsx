import react ,{useState, useEffect} from "react";

function NewProduct(props) {
    let [item , setItem] = useState({})
    const inputChange = (e) => {
        item[e.target.name] = e.target.value
    }

    const saveAll = () => {
        props.onAdd(item);
      };

    return(<div>
        <h1>add new product </h1>

        <label>name:</label>
        <input  name="productName"type="text" onChange={inputChange} />

        <label>price:</label>
        <input name="price"type="text" onChange={inputChange}/>
        
        <label>amount:</label>
        <input name="amount"type="text" onChange={inputChange} />
        
        <button onClick={saveAll}>save</button>


    </div>)
}
export default NewProduct;