import React, {Component} from "react";
import GroceryList from "./GroceryList";
import ShoppingList from "./ShoppingList";

class Container extends Component {

    constructor(props){
        super(props);
        this.state = {
            shoppingListItems: [
                { id: 1, title: "Brood" },
                { id: 2, title: "Boter" },
                { id: 3, title: "Courgette" },
                { id: 4, title: "Gehakt" }
              ],
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Wortels" },
                { id: 3, title: "Kaas" },
                { id: 4, title: "Komkommer" }
              ]
        };
        this.clickItem = this.clickItem.bind(this);
    }
    
    clickItem(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render(){

        return (
            <div id="container"> 
                <header>
                    <h1>Boodschappenlijst</h1>
                </header>

                <form id="addGrocery">
                    #addGrocery
                </form>

                <form id="clearCart">
                    #clearCart
                </form>

                <div id="groceries">
                    <GroceryList clickItem={this.clickItem} groceryItems={this.state.groceryItems}/>
                </div>

                <div id="cart">
                    <ShoppingList clickItem={this.clickItem} shoppingListItems={this.state.shoppingListItems}/>
                </div> 
            </div>
                
        )
    }

}

export default Container;