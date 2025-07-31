import React from "react";
import { Box, Container } from "@radix-ui/themes";
export default class MacskasFadisz extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text,
            tableData: []
        }
    }

    render() {
        return  <Box>
                    {this.state.tableData.map((row, i) => <p key={i}>{row}</p>)}
                </Box>;
    }

    populateTableData() {
        const { text } = this.state;
        let tableData = [];
        let rowStr = "";
        for (let i = 0; i < text.length; i++) {
        if (rowStr.length >= 1 && text[i] >= "A" && text[i] <= "Z") {
            tableData.push(rowStr);
            rowStr = text[i];
        } else {
            rowStr += text[i];
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
        if (prevState.text !== this.state.text) {
            this.populateTableData();
        }
    }
}