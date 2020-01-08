import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
    myInput = React.createRef();

    goToStore = (event) => {
        event.preventDefault();
        this.props.history.push(`/store/${this.myInput.current.value}`);
    }

    render () {
        return ( 
            <form action="" className="store-selector" onSubmit={this.goToStore}>
                <h2>Please enter a store</h2>
                <input 
                    type="text" 
                    required 
                    placeholder="Store name" 
                    defaultValue={getFunName()} 
                    ref={this.myInput}
                />
                <button type="submit">Visit store</button>
            </form>
        )
    }
}

export default StorePicker;