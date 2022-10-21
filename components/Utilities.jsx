import {
    Box,
    Flex,
    Icon,
    List,
    ListIcon,
    ListItem,
    SimpleGrid,
    Text,
} from "@chakra-ui/react";
import React from "react";
import SrceenWidth from "../Layout/ScreenWidth";
import { FaCrown } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";
const Utilities = () => {
    return (
        <Box py="64px" bgColor="#040c12" id="utility">
            <SrceenWidth>
                <Text
                    fontWeight="900"
                    fontSize={["24px", null, "56px"]}
                    textAlign="center"
                >
                    Utility for the community
                </Text>

                <SimpleGrid
                    minChildWidth={["200px", null, "300px"]}
                    mt="64px"
                    mx="auto"
                    gap="32px"
                >
                    <Box
                        h="fit-content"
                        width="100%"
                        mx="auto"
                        bgColor="rgba(255, 255, 255, 0.05)"
                        borderColor="whiteAlpha.400"
                        px="20px"
                        pb="20px"
                    >
                        <Flex
                            w="70px"
                            h="70px"
                            mx="auto"
                            justify={"center"}
                            align={"center"}
                            fontSize="56px"
                            className="strokeText"
                            //     bgColor=""
                        >
                            {/* <Icon as={FaCrown} fontSize="30px" /> */}
                            <Text color="transparent"> 1</Text>
                        </Flex>
                        <Text
                            fontSize={["16px", null, "16px"]}
                            fontWeight="900"
                        >
                            We will be implementing{" "}
                            <Text
                                as="span"
                                color="brand.green"
                                fontWeight="900"
                            >
                                2
                            </Text>{" "}
                            royalties:
                        </Text>
                        <Box
                            mt="12px"
                            fontWeight="500"
                            fontSize="14px"
                            color="brand.fade"
                        >
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="green.500"
                                    />
                                    Creator wallet will receive{" "}
                                    <Text
                                        as="span"
                                        color="brand.green"
                                        fontWeight="900"
                                    >
                                        2%
                                    </Text>
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="green.500"
                                    />
                                    Public mint wallets will receive{" "}
                                    <Text
                                        as="span"
                                        color="brand.green"
                                        fontWeight="900"
                                    >
                                        {" 4% "}
                                    </Text>
                                </ListItem>
                            </List>

                            <Text mt="16px">
                                With marmalade that means these are forever, so
                                if you are the first to mint any of the 1,250
                                Skellies you will receive{" "}
                                <Text
                                    as="span"
                                    color="brand.green"
                                    fontWeight="900"
                                >
                                    {" 4% "}
                                </Text>
                                of all secondary marketplace transactions
                                <Text
                                    as="span"
                                    color="brand.green"
                                    fontWeight="900"
                                >
                                    {" FOREVER "}
                                </Text>{" "}
                                any time your minted Skelly is sold!!* Will
                                share more utility in near future.
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        width="100%"
                        mx="auto"
                        bgColor="rgba(255, 255, 255, 0.05)"
                        borderColor="whiteAlpha.400"
                        px="20px"
                        pb="20px"
                    >
                        <Flex
                            w="70px"
                            h="70px"
                            mx="auto"
                            justify={"center"}
                            align={"center"}
                            fontSize="56px"
                            className="strokeText2"
                            //     bgColor=""
                        >
                            {/* <Icon as={FaCrown} fontSize="30px" /> */}
                            <Text color="transparent"> 2</Text>
                        </Flex>
                        <Text
                            fontSize={["16px", null, "16px"]}
                            fontWeight="900"
                        >
                            Mint funds will be split equally between the 1/1
                            holders (10x 1/1) as follows:
                            {/* <Text
                                as="span"
                                color="brand.purple"
                                fontWeight="900"
                            >
                                2
                            </Text>{" "}
                            royalties: */}
                        </Text>
                        <Box
                            mt="12px"
                            fontWeight="500"
                            fontSize="14px"
                            color="brand.fade"
                        >
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 350 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 5% "}
                                    </Text>
                                    of mint funds
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 450 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 10% "}
                                    </Text>
                                    of mint funds
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 550 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 15% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 650 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 20% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 750 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 25% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 850 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 30% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 950 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 35% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 1,050 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 40% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 1,150 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 45% "}
                                    </Text>
                                    of mint funds
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.purple"
                                    />
                                    Mint 1,250 Skellies
                                    <Text
                                        as="span"
                                        color="brand.purple"
                                        fontWeight="900"
                                    >
                                        {" 50% "}
                                    </Text>
                                    of mint funds
                                </ListItem>
                            </List>

                            <Text mt="16px" fontWeight="900" fontSize="16px">
                                Examples:
                            </Text>
                            <Text mt="1px">
                                <List>
                                    <ListItem>
                                        <ListIcon
                                            as={BsFillCheckCircleFill}
                                            color="brand.purple"
                                        />
                                        If we mint all 1,250 Skellies, the 10x
                                        1/1 holders will each receive
                                        <Text
                                            as="span"
                                            color="brand.purple"
                                            fontWeight="900"
                                        >
                                            {" 495 $KDA "}
                                        </Text>
                                        (150 Free mints, 9900 $KDA funds after
                                        marketplace fees)
                                    </ListItem>
                                </List>
                                <List mt="10px">
                                    <ListItem>
                                        <ListIcon
                                            as={BsFillCheckCircleFill}
                                            color="brand.purple"
                                        />
                                        If we mint 750 Skellies, the 1/1 holders
                                        will
                                        <Text
                                            as="span"
                                            color="brand.purple"
                                            fontWeight="900"
                                        >
                                            {" split 1350 $KDA "}
                                        </Text>
                                        depending on how many 1/1 holders there
                                        are and assuming all 150 Free mints
                                        minted.
                                    </ListItem>
                                </List>
                            </Text>
                            <Text mt="6px">
                                The remaining funds will be to cover current
                                Evolution costs, to fund the second Evolution of
                                Kadena Skellies and some surprise giveaways
                            </Text>
                        </Box>
                    </Box>

                    <Box
                        width="100%"
                        mx="auto"
                        h="fit-content"
                        bgColor="rgba(255, 255, 255, 0.05)"
                        borderColor="whiteAlpha.400"
                        px="20px"
                        pb="20px"
                    >
                        <Flex
                            w="70px"
                            h="70px"
                            mx="auto"
                            justify={"center"}
                            align={"center"}
                            fontSize="56px"
                            className="strokeText3"
                        >
                            {/* <Icon as={FaCrown} fontSize="30px" /> */}
                            <Text color="transparent"> 3</Text>
                        </Flex>
                        <Text
                            fontSize={["16px", null, "16px"]}
                            fontWeight="900"
                        >
                            Holding 10 Kadena Skellies in your wallet will grant
                            you
                            <Text as="span" color="brand.gold" fontWeight="900">
                                {" 1 FREE MINT "}
                            </Text>
                            for the second Evolution!
                        </Text>
                        <Box
                            mt="12px"
                            fontWeight="500"
                            fontSize="14px"
                            color="brand.fade"
                        >
                            <Text mb="10px">
                                This can be stacked with any multiple of 10!
                            </Text>
                            <List spacing={3}>
                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.gold"
                                    />
                                    Hold 20 Kadena Skellies you get
                                    <Text
                                        as="span"
                                        color="brand.gold"
                                        fontWeight="900"
                                    >
                                        {" 2 FREE MINTS "}
                                    </Text>
                                    for the second Evolution
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.gold"
                                    />
                                    Hold 30 Kadena Skellies you get
                                    <Text
                                        as="span"
                                        color="brand.gold"
                                        fontWeight="900"
                                    >
                                        {" 3 FREE MINTS "}
                                    </Text>
                                    for the second Evolution
                                </ListItem>

                                <ListItem>
                                    <ListIcon
                                        as={BsFillCheckCircleFill}
                                        color="brand.gold"
                                    />
                                    Hold 40 Kadena Skellies you get
                                    <Text
                                        as="span"
                                        color="brand.gold"
                                        fontWeight="900"
                                    >
                                        {" 4 FREE MINTS "}
                                    </Text>
                                    for the second Evolution
                                </ListItem>
                            </List>

                            <Text mt="16px">
                                Snapshot date of holders will more than likely
                                be 1 week before the start (not mint) of the
                                second Evolution (TBD).
                            </Text>
                        </Box>
                    </Box>
                </SimpleGrid>
            </SrceenWidth>
        </Box>
    );
};

export default Utilities;
