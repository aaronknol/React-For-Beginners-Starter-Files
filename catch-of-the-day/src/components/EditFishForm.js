import React from 'react';

class EditFishForm extends React.Component {
    handleChange = (event) => {
        const updatedFish = {
            ...this.props.fish, 
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updatedFish);
    }

    render() {
        return (
            <div className="fish-edit">
                <input type="text" name="name" onChange={this.handleChange} value={this.props.fish.name} />
                <input type="text" name="price" onChange={this.handleChange} value={this.props.fish.price} />
                <select name="status">
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
                <textarea type="text" name="desc" onChange={this.handleChange} value={this.props.fish.desc}></textarea>
                <input type="text" name="image" onChange={this.handleChange} value={this.props.fish.image} />
                <button type="button" onClick={ () => this.props.deleteFish(this.props.index) }>Remove fish</button>
            </div>
        )
    }
}

export default EditFishForm;