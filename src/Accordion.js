import React from 'react';
import './Accordion.css';


class Accordion extends React.Component {
    static defaultProps = {
        sections: [],
    };

    state = {
        currentIndex: 0
    }



    renderButtons() {
        return this.props.sections.map((tab, index) => {
            return <li>
                    <button data-id={index} onClick={this.handleButtonClick}>{tab.title}</button>
                    {this.renderContent(index)}
                </li>
        });
    }

    renderContent(index) {
        console.log(index);
        console.log(this.state.currentIndex);
        // let index = this.state.currentIndex;
        if (index !== parseInt(this.state.currentIndex)) {
            return '';
        }
        const currentTab = this.props.sections[index]
        return (

            <p className=''>{currentTab.content}</p>
        )
    }

    handleButtonClick = (event) => {
        let index = event.currentTarget.dataset.id;
        // console.log(`button clicked ${index}`)
        this.setState({
            currentIndex: index
        })
        // console.log(this.state.currentIndex);
    }


    render() {

        return (
            <div>
                {this.renderButtons()}
                
            </div>
        )
    }
}

export default Accordion;