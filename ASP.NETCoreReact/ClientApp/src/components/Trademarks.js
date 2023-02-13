import React, { Component } from 'react';

export class Trademark extends Component {
    static displayName = Trademark.name;

    constructor(props) {
        super(props);
        this.state = { trademarks: [], loading: true };
    }

    componentDidMount() {
        this.populateTrademarksData();
    }

    static renderTrademarksTable(trademarks) {
        return (
            <table className="table table-striped" aria-labelledby="tableLabel">
                <tbody>
                {trademarks.map(trademark =>
                    <tr key={trademark}>
                        <td>{trademark}</td>
                    </tr>
                )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Trademark.renderTrademarksTable(this.state.trademarks);

        return (
            <div>
                <h1 id="tableLabel">Trademarks</h1>
                {contents}
            </div>
        );
    }

    async populateTrademarksData() {
        const response = await fetch('trademarks/get');
        const data = await response.json();
        this.setState({ trademarks: data, loading: false });
    }
}
