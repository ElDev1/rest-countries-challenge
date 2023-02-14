import { Stack, Text, Box, Container, Button } from '@chakra-ui/react'
import { BsMoon } from 'react-icons/bs'

export const Header = () => {
  return (
    <Box display="flex" alignItems='center' height="70px"  shadow='md' bgColor='white'>
        <Container maxW='8xl'>
            <Stack direction='row' justify='space-between' align='center'>
                <Text fontWeight="700" fontSize="20px">
                    Where in the World?
                </Text>
                <Button leftIcon={<BsMoon />} variant='ghost' color="gray" fontSize="16px">Dark mode</Button>
            </Stack>
        </Container>
    </Box>
  )
}
