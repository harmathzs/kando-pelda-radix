import React from "react";
import { Box, Container } from "@radix-ui/themes";
export default class MacskasFadisz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tableData: []
        }
    }

    render() {
        return  <Box>
                    <table style={{border: '1px solid black', borderCollapse: 'collapse', margin: '20px'}}>
                        <tbody>
                            {this.state.tableData.map((row, i) => 
                            <tr key={i}>
                                {[...row.trim()].map((kar, j)=>
                                <td key={j} style={{border: '1px solid black', width: '80px', height: '80px'}}>
                                    {kar}
                                </td>)}
                            </tr>)}
                        </tbody>
                    </table>
                </Box>;
    }

    populateTableData() {
        const text = this.props.text || '';
        let tableData = [];
        let rowStr = "";
        for (let i = 0; i < text.length; i++) {
        if (rowStr.length >= 1 && text[i] >= "A" && text[i] <= "Z") {
            tableData.push(rowStr);
            rowStr = text[i].toUpperCase();
        } else {
            rowStr += text[i].toUpperCase();
        }
        }
        if (rowStr.length >= 1) {
        tableData.push(rowStr);
        }
        // Set tableData into state to trigger re-render
        this.setState({ tableData });
    }

    componentDidMount() {
        this.populateTableData();
    }

    componentDidUpdate(prevProps, prevState) {
        // Only recalculate if text changed
        if (prevProps.text !== this.props.text) {
            this.populateTableData();
        }
    }
}