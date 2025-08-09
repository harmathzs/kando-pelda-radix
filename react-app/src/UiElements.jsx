import React from 'react';
import { Flex, Box, AlertDialog, Button, Avatar, Badge, Callout, Card, Text, DataList, Link, Code, IconButton, Dialog, TextField, DropdownMenu, Popover, Checkbox, TextArea, Progress, ScrollArea, Heading, SegmentedControl, Slider, Spinner, Table } from "@radix-ui/themes";
export default class UiElements extends React.Component {
    handleAlertDialogCancelButtonClick = e => {
        console.log('handleAlertDialogCancelButtonClick e', e);
    }

    handleAlertDialogActionButtonClick = e => {
        console.log('handleAlertDialogActionButtonClick e', e);
    }

    render() {
        return <Flex gap="3" style={{margin: '20px'}}>
                    <Box width="384px" height="640px">
                        <AlertDialog.Root>
                            <AlertDialog.Trigger>
                                <Button color="red" variant='solid' radius='full'>AlertDialog Trigger Button</Button>
                            </AlertDialog.Trigger>
                            <AlertDialog.Content maxWidth="450px">
                                <AlertDialog.Title>AlertDialog Title</AlertDialog.Title>
                                <AlertDialog.Description size="2">
                                    AlertDialog
                                    Description
                                </AlertDialog.Description>

                                <Flex gap="3" mt="4" justify="end">
                                    <AlertDialog.Cancel>
                                        <Button variant="soft" color="gray" onClick={this.handleAlertDialogCancelButtonClick}>
                                            Cancel Button
                                        </Button>
                                    </AlertDialog.Cancel>
                                    <AlertDialog.Action>
                                        <Button variant="solid" color="red" onClick={this.handleAlertDialogActionButtonClick}>
                                            Action Button
                                        </Button>
                                    </AlertDialog.Action>
                                </Flex>
                            </AlertDialog.Content>
                        </AlertDialog.Root>

                        <Flex gap="2">
                            <p>Avatar: </p>
                            <Avatar
                                src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
                                fallback="A"
                            />
                            {/*<Avatar fallback="A" />*/}
                        </Flex>

                        <Flex gap="2">
                            <Badge color="orange">Orange Badge</Badge>
                            <Badge color="blue">Blue Badge</Badge>
                            <Badge color="green">Green Badge</Badge>
                        </Flex>

                        <Callout.Root color="red" role="alert" variant='surface'>
                            <Callout.Icon>
                                {/*<ExclamationTriangleIcon />*/}
                            </Callout.Icon>
                            <Callout.Text>
                                Short message to attract user’s attention.
                            </Callout.Text>
                        </Callout.Root>

                        <Box maxWidth="240px">
                            <Card>
                                <Flex gap="3" align="center">
                                    <Avatar
                                        size="3"
                                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                        radius="full"
                                        fallback="T"
                                    />
                                    <Box>
                                        <Text as="div" size="2" weight="bold">
                                            Card bold Text
                                        </Text>
                                        <Text as="div" size="2" color="gray">
                                            Card text
                                        </Text>
                                    </Box>
                                </Flex>
                            </Card>
                        </Box>

                        <DropdownMenu.Root>
                            <DropdownMenu.Trigger>
                                <Button variant="soft">
                                    DropdownMenu: Options
                                    <DropdownMenu.TriggerIcon />
                                </Button>
                            </DropdownMenu.Trigger>
                            <DropdownMenu.Content>
                                <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
                                <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

                                <DropdownMenu.Sub>
                                    <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
                                    <DropdownMenu.SubContent>
                                        <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
                                        <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

                                        <DropdownMenu.Separator />
                                        <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
                                    </DropdownMenu.SubContent>
                                </DropdownMenu.Sub>

                                <DropdownMenu.Separator />
                                <DropdownMenu.Item>Share</DropdownMenu.Item>
                                <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
                                <DropdownMenu.Separator />
                                <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
                                    Delete
                                </DropdownMenu.Item>
                            </DropdownMenu.Content>
                        </DropdownMenu.Root>

                        <Box maxWidth="300px">
                            <p>Progress: </p>
                            <Progress value={75} />
                        </Box>

                        <SegmentedControl.Root defaultValue="segmentedbtn1">
                            <SegmentedControl.Item value="segmentedbtn1">Segmented</SegmentedControl.Item>
                            <SegmentedControl.Item value="segmentedbtn2">Control</SegmentedControl.Item>
                            <SegmentedControl.Item value="segmentedbtn3">toggle</SegmentedControl.Item>
                            <SegmentedControl.Item value="segmentedbtn4">buttons</SegmentedControl.Item>
                        </SegmentedControl.Root>

                        <Flex direction="column" gap="4" maxWidth="300px">
                            <p>Slider: </p>
                            <Slider defaultValue={[25]} radius="none" />
                            <p>range Slider: </p>
                            <Slider defaultValue={[25, 75]} radius="small" color='crimson' />
                        </Flex>


                    </Box>

                    <Box width="384px" height="640px">
                        <p>DataList: </p>
                        <DataList.Root>
                            <DataList.Item align="center">
                                <DataList.Label minWidth="88px">Status</DataList.Label>
                                <DataList.Value>
                                    <Badge color="jade" variant="soft" radius="full">
                                        Authorized
                                    </Badge>
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label minWidth="88px">ID</DataList.Label>
                                <DataList.Value>
                                    <Flex align="center" gap="2">
                                        <Code variant="ghost">u_2J89JSA4GJ</Code>
                                        <IconButton
                                            size="1"
                                            aria-label="Copy value"
                                            color="gray"
                                            variant="ghost"
                                        >
                                            {/*<CopyIcon />*/}
                                        </IconButton>
                                    </Flex>
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label minWidth="88px">Name</DataList.Label>
                                <DataList.Value>Vlad Moroz</DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label minWidth="88px">Email</DataList.Label>
                                <DataList.Value>
                                    <Link href="mailto:vlad@workos.com">vlad@workos.com</Link>
                                </DataList.Value>
                            </DataList.Item>
                            <DataList.Item>
                                <DataList.Label minWidth="88px">Company</DataList.Label>
                                <DataList.Value>
                                    <Link target="_blank" href="https://workos.com">
                                        WorkOS
                                    </Link>
                                </DataList.Value>
                            </DataList.Item>
                        </DataList.Root>

                        <Dialog.Root>
                            <Dialog.Trigger>
                                <Button>Dialog (modal) button: Edit profile</Button>
                            </Dialog.Trigger>

                            <Dialog.Content maxWidth="450px">
                                <Dialog.Title>Edit profile</Dialog.Title>
                                <Dialog.Description size="2" mb="4">
                                    Make changes to your profile.
                                </Dialog.Description>

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
                            </Dialog.Content>
                        </Dialog.Root>

                        <Popover.Root>
                            <Popover.Trigger>
                                <Button variant="soft">
                                    {/*<ChatBubbleIcon width="16" height="16" />*/}
                                    Popover: Comment
                                </Button>
                            </Popover.Trigger>
                            <Popover.Content width="360px">
                                <Flex gap="3">
                                    <Avatar
                                        size="2"
                                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                                        fallback="A"
                                        radius="full"
                                    />
                                    <Box flexGrow="1">
                                        <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
                                        <Flex gap="3" mt="3" justify="between">
                                            <Flex align="center" gap="2" asChild>
                                                <Text as="label" size="2">
                                                    <Checkbox />
                                                    <Text>Send to group</Text>
                                                </Text>
                                            </Flex>

                                            <Popover.Close>
                                                <Button size="1">Comment</Button>
                                            </Popover.Close>
                                        </Flex>
                                    </Box>
                                </Flex>
                            </Popover.Content>
                        </Popover.Root>

                        <ScrollArea type="always" scrollbars="vertical" style={{ height: 180 }}>
                            <Box p="2" pr="8">
                                <Heading size="4" mb="2" trim="start">
                                    ScrollArea: Principles of the typographic craft
                                </Heading>
                                <Flex direction="column" gap="4">
                                    <Text as="p">
                                        Three fundamental aspects of typography are legibility, readability, and
                                        aesthetics. Although in a non-technical sense “legible” and “readable”
                                        are often used synonymously, typographically they are separate but
                                        related concepts.
                                    </Text>

                                    <Text as="p">
                                        Legibility describes how easily individual characters can be
                                        distinguished from one another. It is described by Walter Tracy as “the
                                        quality of being decipherable and recognisable”. For instance, if a “b”
                                        and an “h”, or a “3” and an “8”, are difficult to distinguish at small
                                        sizes, this is a problem of legibility.
                                    </Text>

                                    <Text as="p">
                                        Typographers are concerned with legibility insofar as it is their job to
                                        select the correct font to use. Brush Script is an example of a font
                                        containing many characters that might be difficult to distinguish. The
                                        selection of cases influences the legibility of typography because using
                                        only uppercase letters (all-caps) reduces legibility.
                                    </Text>
                                </Flex>
                            </Box>
                        </ScrollArea>

                        <Flex align="center" gap="4">
                            <p>Spinner: </p>
                            <Spinner size="3" loading={true} />
                        </Flex>

                        <Table.Root variant="surface">
                            <Table.Header>
                                <Table.Row>
                                    <Table.ColumnHeaderCell>Full name</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                                    <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                <Table.Row>
                                    <Table.RowHeaderCell>Danilo Sousa</Table.RowHeaderCell>
                                    <Table.Cell>danilo@example.com</Table.Cell>
                                    <Table.Cell>Developer</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.RowHeaderCell>Zahra Ambessa</Table.RowHeaderCell>
                                    <Table.Cell>zahra@example.com</Table.Cell>
                                    <Table.Cell>Admin</Table.Cell>
                                </Table.Row>

                                <Table.Row>
                                    <Table.RowHeaderCell>Jasper Eriksson</Table.RowHeaderCell>
                                    <Table.Cell>jasper@example.com</Table.Cell>
                                    <Table.Cell>Developer</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table.Root>


                    </Box>
                </Flex>
    }
}