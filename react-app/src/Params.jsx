import React from "react";

export default class Params extends React.Component {
    state = {
        searchParamsObj: null,
        searchParamsArr: []
    }

    componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const recentSearchParamsArr = [...queryParams.entries()];
        const recentSearchParamsObj = Object.fromEntries(queryParams.entries());
        console.log('recentSearchParamsArr', recentSearchParamsArr);
        console.log('recentSearchParamsObj', recentSearchParamsObj);
        this.setState({searchParamsObj: recentSearchParamsObj, searchParamsArr: recentSearchParamsArr});
    }

    render() {
        return <div>
            <p><a href='http://localhost:5173/params?fruit=apple&animal=monkey'>http://localhost:5173/params?fruit=apple&animal=monkey</a></p>
            <p>{this.state.searchParamsArr.join()}</p>
            <pre>{JSON.stringify(this.state.searchParamsObj ?? '')}</pre>
        </div>
        
    }
}