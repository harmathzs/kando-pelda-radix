import { Flex, Box, Card, Text, Strong, Inset } from "@radix-ui/themes";
import TrekkingImg from './assets/trekking.avif';
import MtbImg from './assets/mtb.webp';
const FunctionBikeTile = ({type}) => <Box maxWidth="240px">
                                    <Card size="2">
                                        <Inset clip="padding-box" side="top" pb="current">
                                            <img
                                                src={type=='trekking' ? TrekkingImg : MtbImg}
                                                alt="Bold typography"
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
                                            <Strong>MTB</Strong> - price: $1299
                                        </Text>
                                    </Card>
                                </Box>
export default FunctionBikeTile;
