import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export default function Register() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} minW={'600px'} py={8} px={4}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={16}
        >
          <Stack align={'flex-start'} mb={8}>
            <Heading fontSize={'4xl'}>Register</Heading>
          </Stack>
          <Stack spacing={4}>
            <FormControl id="namaLengkap">
              <FormLabel>Nama Lengkap</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Alamat Email</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <FormControl id="confirmPassword">
              <FormLabel>Konfirmasi Password</FormLabel>
              <Input type="password" />
            </FormControl>

            <Stack></Stack>
            <Stack pt={0}>
              <Text align={'center'}>
                Sudah punya akun ?
                <Link as={ReactLink} to="/auth/login" color={'#37E2D5'}>
                  {' '}
                  Masuk
                </Link>
              </Text>
            </Stack>
            <Button
              bg={'#36435A'}
              color={'white'}
              _hover={{
                bg: '#8C8E93',
              }}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
