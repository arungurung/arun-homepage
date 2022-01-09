import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Link,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        textAlign="center"
      >
        Hello, I&apos;m a front-end developer based in Australia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Arun Gurung
          </Heading>
          <p>Digital Craftzman ( Artist / Developer / Designer )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/takuya.jpg"
            alt="Profile Image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Arun is a front-end developer currently working with React. He loves
          learning new technologies. His passion is in writing clean code and
          making them easier for anyone to read them through. He loves taking
          pictures of nature. Currently, he is wokring on his portfolio with
          reactNative; working with different frameworks such as Next.js, framer
          and chakraUI. He is also working on his secret project called{' '}
          <NextLink href="/works/inkdrop">
            <Link>InkDrop</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1992</BioYear>
          Born in Pokhara ( पोखरा ) Nepal.
        </BioSection>
        <BioSection>
          <BioYear>2006</BioYear>
          Completed Schooling from Gandaki Boarding School.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Completed Bachelor&apos;s in Business and Information Studies at
          Kathmandu College of Management.
        </BioSection>
        <BioSection>
          <BioYear>2019</BioYear>
          Completed Master&apos;s in Information and Technology - Application
          Development at Victoria University.
        </BioSection>
      </Section>
    </Container>
  )
}

export default Page
