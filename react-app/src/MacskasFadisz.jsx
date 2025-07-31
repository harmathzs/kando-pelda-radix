import React from "react";
import { Box, Container } from "@radix-ui/themes";
export default class MacskasFadisz extends React.Component {
    constructor({text}) {
        super({text});

        this.state = {
            text: text
        }
    }

    render() {
        return <div>
            <Box>
                <p>{this.state.text}</p>
            </Box>
        </div>;
    }
}