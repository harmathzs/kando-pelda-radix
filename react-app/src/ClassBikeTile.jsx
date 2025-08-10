import React from "react";
import { Flex, Box, Card, Text, Strong, Inset } from "@radix-ui/themes";
import TrekkingImg from './assets/trekking.avif';
import MtbImg from './assets/mtb.webp';
export default class ClassBikeTile extends React.Component {
    render() {
        return <Box maxWidth="240px">
                    <Card size="2">
                        <Inset clip="padding-box" side="top" pb="current">
                            <img
                                src={this.props.type=='trekking' ? TrekkingImg : MtbImg}
                                alt="Trekking"
                                style={{
                                    display: "block",
                                    objectFit: "cover",
                                    width: "100%",
                                    height: 140,
                                    backgroundColor: "var(--gray-5)",
                                }}
                            />
                        </Inset>
                        <Text as="p" size="3">
                            <Strong>Trekking</Strong> - price: $1899
                        </Text>
                    </Card>
                </Box>

    }
}