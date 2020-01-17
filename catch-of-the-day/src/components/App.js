import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    static propTypes = {
        match: PropTypes.object
    };

    componentDidMount () {
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);
        if (localStorageRef) {
            this.setState({
                order: JSON.parse(localStorageRef)
            });
        }
        this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });
    }

    componentDidUpdate() {
        console.log(this.state.order);
        localStorage.setItem(
            this.props.match.params.storeId, 
            JSON.stringify(this.state.order
        ));
    }

    componentWillUnmount () {
        console.log("UNMOUNTING!!!!")
        base.removeBinding(this.ref);
    }

    addFish = (fish) => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: fishes
        });
    };

    updateFish = (key, updatedFish) => {
        const fishes = { ...this.state.fishes };
        fishes[key] = updatedFish;
        this.setState({
            fishes: fishes
        });
    }

    deleteFish = (key) => {
        const fishes = {...this.state.fishes};
        fishes[key] = null;
        console.log('fishes: ', fishes);
        this.setState({
            fishes: fishes
        });
    }

    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({order});
    };

    removeFromOrder = (key) => {
        const order = {...this.state.order};
        delete order[key];
        this.setState({order});
    };

    render () {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh seafood daily" />
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => (
                            <Fish 
                                key={key} 
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder}
                                index={key}
                            />
                        ))}    
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
                <Inventory 
                    addFish={this.addFish} 
                    loadSampleFishes={this.loadSampleFishes} 
                    addToOrder={this.addToOrder} 
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                    deleteFish={this.deleteFish}
                />
            </div>
        )
    }
}

export default App;