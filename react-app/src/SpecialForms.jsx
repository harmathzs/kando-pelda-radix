import React from "react";
import { Flex, Box, Text, Button } from '@radix-ui/themes';

export default class SpecialForms extends React.Component {
    state = {
        showAlertDialog: false,
        formDataObj: '',
    }

    handleHtmlForm = e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());
        console.log(values);

        this.setState({showAlertDialog: true, formDataObj: values});
    }

    handleFileForm = e => {

    }

    render() {
        return <Flex direction='column' gap='3'>
            {this.state.showAlertDialog ? <pre>{JSON.stringify(this.state.formDataObj)}</pre> : <p></p>}
            <h4>Not Radix Form elements</h4>
            <form method="POST" onSubmit={this.handleHtmlForm}>
                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpColor">
                        <Text as="label">Color picker: </Text>
                        <input type="color" id="cmpColor" name="cmpColor" />
                    </label>
                </Box>
                
                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpDate">
                        <Text as="label">Date: </Text>
                        <input type="date" id="cmpDate" name="cmpDate" />
                    </label>
                </Box>

                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpTime">
                        <Text as="label">Time: </Text>
                        <input type="time" id="cmpTime" name="cmpTime" />
                    </label>
                </Box>

                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpDatetime">
                        <Text as="label">Datetime: </Text>
                        <input type="datetime-local" id="cmpDatetime" name="cmpDatetime" />
                    </label>
                </Box>

                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpMonth">
                        <Text as="label">Month: </Text>
                        <input type="month" id="cmpMonth" name="cmpMonth" />
                    </label>
                </Box>

                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpWeek">
                        <Text as="label">Week: </Text>
                        <input type="week" id="cmpWeek" name="cmpWeek" />
                    </label>
                </Box>

                <Box style={{textAlign: 'left'}}>
                    <label htmlFor="cmpPassword">
                        <Text as="label">Password: </Text>
                        <input type="password" id="cmpPassword" name="cmpPassword" />
                    </label>
                </Box>

                <Box style={{textAlign: 'right'}}>
                    <Button type='submit'>Submit</Button>
                </Box>
            </form>

            <form method="POST" onSubmit={this.handleFileForm}>

            </form>
        </Flex>
    }
}