import { Stack, Text, Box, Container, Button } from '@chakra-ui/react'
import { BsMoon } from 'react-icons/bs'

export const Header = () => {
  return (
    <Box display="flex" alignItems='center' height="50px"  shadow='md'>
        <Container maxW='8xl'>
            <Stack direction='row' justify='space-between' align='center'>
                <Text fontWeight="700">
                    Where in the World?
                </Text>
                <Button leftIcon={<BsMoon />} variant='ghost'>Dark mode</Button>
            </Stack>
        </Container>
    </Box>
  )
}
