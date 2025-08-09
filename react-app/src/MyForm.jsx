import React from 'react';
import { Flex, Box, Dialog, Button, Checkbox, Text, TextField, CheckboxCards, RadioCards, Select, TextArea, Slider, Switch } from "@radix-ui/themes";
import { FilePlusIcon } from "@radix-ui/react-icons";

export default class MyForm extends React.Component {
    handleFormSubmit = e => {
        console.log('handleFormSubmit e', e);
    }

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

                            <form method='POST'>
                                <Flex direction="column" gap="3">
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Name
                                        </Text>
                                        <TextField.Root
                                            name='inputName'
                                            defaultValue="Freja Johnsen"
                                            placeholder="Enter your full name"
                                        />
                                    </label>
                                    <label>
                                        <Text as="div" size="2" mb="1" weight="bold">
                                            Email
                                        </Text>
                                        <TextField.Root
                                            name='inputEmail'
                                            defaultValue="freja@example.com"
                                            placeholder="Enter your email"
                                        />
                                    </label>
                                </Flex>

                                <Text as="label" size="2">
                                    <Flex as="span" gap="2" justify="end">
                                        <Checkbox name='checkboxMale' />
                                        Male
                                    </Flex>
                                </Text>

                                <Flex align="center" gap="3">
                                    <RadioCards.Root defaultValue="1" columns={{ initial: "1", sm: "3" }}>
                                        <RadioCards.Item value="1">
                                            <Flex direction="column" width="100%">
                                                <Text weight="bold">Free</Text>
                                                <Text>Free user</Text>
                                            </Flex>
                                        </RadioCards.Item>
                                        <RadioCards.Item value="2">
                                            <Flex direction="column" width="100%">
                                                <Text weight="bold">Cheap</Text>
                                                <Text>Cheap package</Text>
                                            </Flex>
                                        </RadioCards.Item>
                                        <RadioCards.Item value="3">
                                            <Flex direction="column" width="100%">
                                                <Text weight="bold">Expensive</Text>
                                                <Text>Expensive package</Text>
                                            </Flex>
                                        </RadioCards.Item>
                                    </RadioCards.Root>
                                </Flex>

                                <Flex gap="3" justify="end">
                                    <Text as='label'>Role: </Text>
                                    <Select.Root defaultValue="dev">
                                        <Select.Trigger radius="full" />
                                        <Select.Content>
                                            <Select.Item value="dev">Developer</Select.Item>
                                            <Select.Item value="salesrep">Sales rep</Select.Item>
                                            <Select.Item value="am">Account manager</Select.Item>
                                        </Select.Content>
                                    </Select.Root>
                                </Flex>

                                <Flex direction="column" gap="4" maxWidth="300px">
                                    <Text as='label'>English proficiency: </Text>
                                    <Slider defaultValue={[25]} size="1" name='sliderEnglish' />
                                    <Text as='label'>Salary expectation range: </Text>
                                    <Slider min={0} max={12000} defaultValue={[1200, 4800]} size="1" name='sliderSalaryRange' />
                                </Flex>

                                <Flex gap="3" justify="end">
                                    <Text as='label'>Like jokes</Text>
                                    <Switch color="orange" name='switchLikeJokes' defaultChecked />
                                </Flex>

                                <Flex gap="3">
                                    <TextArea style={{width: '600px'}} resize='both' name='textareaComments' placeholder='More comments...' />
                                </Flex>

                                <Flex gap="3">
                                    <Box>
                                        <p>&nbsp;</p>
                                    </Box>
                                </Flex>

                                <Flex align="center" gap="3">
                                    <CheckboxCards.Root defaultValue={["0"]} size="1">
                                        <CheckboxCards.Item value="1">Agree to Terms</CheckboxCards.Item>
                                    </CheckboxCards.Root>

                                    <CheckboxCards.Root defaultValue={["0"]} size="1">
                                        <CheckboxCards.Item value="1">Agree to Conditions</CheckboxCards.Item>
                                    </CheckboxCards.Root>
                                </Flex>                                

                                <Flex gap="3" mt="4" justify="end">
                                    <Dialog.Close>
                                        <Button variant="soft" color="gray">
                                            Cancel
                                        </Button>
                                    </Dialog.Close>
                                    <Dialog.Close>
                                        <Button onClick={this.handleFormSubmit}>Submit</Button>
                                    </Dialog.Close>
                                </Flex>
                            </form>
                            
                        </Dialog.Content>
                    </Dialog.Root>

        </Box>
    }
}