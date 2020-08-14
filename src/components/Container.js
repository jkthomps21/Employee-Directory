import React, { Component } from "react";
import Header from "./Header";
import THeader from "./THeader";
import TButtons from "./TButtons";
import TBody from "./TBody";
import Arrows from "./Arrows";
import employees from "../employeesSeed.json";
import "./style.css";

class Container extends Component {

    state = {
        sortBy: "id",
        sortOrder: "asc",
        filter: "",
        form: "",
        seed: employees
    };

    handleInputChange = event => {
        const value = event.target.value;
        this.setState({
            form: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.form) {
            this.setState({
                filter: this.state.form,
                form: ""
            });
        } else {
            // Give a warning? Possibly?
        }
    };

    clearForm = event => {
        event.preventDefault();
        this.setState({
            form: "",
            filter: ""
        });
    }

    // Add a sort method? Found dynamic sorting method on sitepoint.com
    itemSorter(key, order = 'asc') {
        return function innerSort(a,b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                // if property doesn't exist on either object
                return 0;
            }

            const itemA = (typeof a[key] === 'string')
                ? a[key].toUpperCase() : a[key];
            const itemB = (typeof b[key] === 'string')
                ? b[key].toUpperCase() : b[key];

            let compareItems = 0;
            if (itemA > itemB) {
                compareItems = 1;
            } else if (itemA < itemB) {
                compareItems = -1;
            }
            return (
                (order === 'desc') ? (compareItems * -1) : compareItems
            );
        };
    }
    
    
    tableHeaderConfig() {
        const tArray = Object.values(this.state.seed);
        const tInstance = Object.keys(tArray[0]);
        let header = [];
        tInstance.forEach(value => {
            header.push(
                <TButtons key={value} name={value} sortingButton={this.sortingButton}>
                    <Arrows />
                </TButtons>
            )
        });
        return header;
    }
    
    tableBodyConfig() {
        const tArray = Object.values(this.state.seed);
        const tFilter = [];
        for (const i of tArray) {
            if (Object.values(i).toString().toLowerCase().includes((this.state.filter).toLowerCase()) || !this.state.filter) {
                tFilter.push(i);
            }
        }
        const tSort = tFilter.sort(this.itemSorter(this.state.sortBy, this.state.sortOrder));
        return (tSort);
    }
    
    // Add a sort button?
    sortingButton = (itemSortBy) => {
        if (itemSortBy === this.state.sortBy) {
            if (this.state.sortOrder === "asc") {
                this.setState({ sortOrder: "desc" });
                console.log(this.state.sortOrder);
            } else {
                this.setState({ sortOrder: "asc" });
                console.log(this.state.sortOrder);
            }
        } else {
            this.setState({
                sortOrder: "asc",
                sortBy: itemSortBy
            });
        }
    }

    render() {
        return (
            <div className="container">
                <Header
                    form={this.state.form}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    clearForm={this.clearForm}
                ></Header>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <THeader>
                            {this.tableHeaderConfig()}
                        </THeader>
                        <TBody tableContents={this.tableBodyConfig()}></TBody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Container;