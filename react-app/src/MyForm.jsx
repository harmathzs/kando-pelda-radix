import React from 'react';
import { Flex, Grid, Box, Dialog, Button, Card, Text, TextField, Checkbox, TextArea, Slider } from "@radix-ui/themes";
import { FilePlusIcon } from "@radix-ui/react-icons";

export default class MyForm extends React.Component {
    render() {
        return <Box style={{padding: '15px'}}>
                    <Dialog.Root>
                        <Dialog.Trigger>
                            <Button><FilePlusIcon />Register new user</Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth="1024px">
                            <Dialog.Title>New user</Dialog.Title>
                            <Dialog.Description size="2" mb="4">
                                Register new user.
                            </Dialog.Description>

                            <form>
                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Name
                                        </Text>
                                        <TextField.Root
                                            defaultValue="Freja Johnsen"
                                            placeholder="Enter your full name"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Email
                                        </Text>
                                        <TextField.Root
                                            defaultValue="freja@example.com"
                                            placeholder="Enter your email"
                                        />
                                    </label>
                                </Flex>

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button>Save</Button>
                                    </Dialog.Close>
                                </Flex>
                            </form>
                            
                        </Dialog.Content>
                    </Dialog.Root>

        </Box>
    }
}