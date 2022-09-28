import { Container, Box, Heading, Image, useColorModeValue, Button } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'  
import { BioSection, BioYear } from '../components/bio'
//idea: create type animation hello, world -> hello, I am a .....
const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a SWE intern @ Rivian and Computer Science Student at UBC.
            </Box>  
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Will Howell 
                    </Heading>
                    <p>SWE, Student, Climber, Explorer</p>
                </Box>
                <Box flexShrink={0} mt={{base:4, md: 0}} ml={{md: 6}} align="center">
                    <Image borderColor="whiteAlpha.800" borderWidth={2} borderStyle="solid"
                    maxWidth="100px"
                    display="inline-block"
                    borderRadius="full"
                    src="/images/profilepic.jpg"
                    alt="Profile Picture" />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    About Me
                </Heading>
                <Paragraph>Software Engineer Intern @ Rivian</Paragraph>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            Personal Projects
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2017</BioYear>
                    Studying Biology at UBC
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Switched to Computer Science Major
                </BioSection>
                <BioSection>
                    <BioYear>2022</BioYear>
                    Software Engineer Intern @ Rivian
                </BioSection>
                <BioSection>
                    <BioYear>Future</BioYear>
                    Loading...
                </BioSection>
                 
            </Section>
        </Container>
        
    )
}

export default Page