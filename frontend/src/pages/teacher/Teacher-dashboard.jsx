import {
  Button,
  Container,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Heading,
  HStack,
} from '@chakra-ui/react';
import Footer from '../../component/Footer';
import { Link as ReactLink } from 'react-router-dom';
import { useState } from 'react';

/**
 * Halaman Dashboard teacher
 * Halaman ini digunaakan untuk mengelola materi yang di buat teacher
 */

export default function Teacher() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Container maxW="container.xl" my={16} minH="100vh">
        <HStack justifyContent="space-between" alignItems="center">
          <Heading as="h1" fontSize="24px" mb="16px">
            Teacher Dashboard
          </Heading>
          <Button as={ReactLink} to={buttonContent[tabIndex].link}>
            {buttonContent[tabIndex].label}
          </Button>
        </HStack>

        <Tabs index={tabIndex} onChange={(i) => setTabIndex(i)}>
          <TabList>
            <Tab>Roadmap</Tab>
            <Tab>Courses</Tab>
          </TabList>

          <TabPanels mt={8}>
            <TabPanel p={0}>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Title</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {tableItem.map((item, i) => (
                      <Tr key={i}>
                        <Td isNumeric>{i}</Td>
                        <Td>{item.title}</Td>
                        <Td>{item.status}</Td>
                        <Td>
                          <Flex>
                            <Button
                              mr={10}
                              bgColor={'white'}
                              color={'teal.300'}
                            >
                              Detail
                            </Button>
                            <Button
                              mr={10}
                              bgColor={'white'}
                              color={'teal.300'}
                            >
                              Edit
                            </Button>
                            <Button bgColor={'white'} color={'red'}>
                              Delete
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel p={0}>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Tr>
                      <Th isNumeric>No</Th>
                      <Th>Title</Th>
                      <Th>Roadmap</Th>
                      <Th>Status</Th>
                      <Th>Action</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {coursesItem.map((course, i) => (
                      <Tr key={i}>
                        <Td isNumeric>{i}</Td>
                        <Td>{course.title}</Td>
                        <Td>{course.roadmap}</Td>
                        <Td>{course.status}</Td>
                        <Td>
                          <Flex>
                            <Button
                              mr={10}
                              bgColor={'white'}
                              color={'teal.300'}
                            >
                              Detail
                            </Button>
                            <Button
                              mr={10}
                              bgColor={'white'}
                              color={'teal.300'}
                            >
                              Edit
                            </Button>
                            <Button bgColor={'white'} color={'red'}>
                              Delete
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Footer />
    </>
  );
}

const buttonContent = [
  {
    label: 'Tambah Roadmap',
    link: 'tambah-profesi',
  },
  {
    label: 'Tambah Materi',
    link: 'tambah-materi',
  },
];

const tableItem = [
  {
    id: 1,
    status: 'published',
    title: 'Dokter',
  },
  {
    id: 2,
    status: 'waiting',
    title: 'Insinyur',
  },
  {
    id: 3,
    status: 'reject',
    title: 'Tentara',
  },
];

const coursesItem = [
  {
    id: 1,
    title: 'Aljabar',
    roadmap: 'Insinyur',
    status: 'published',
  },
  {
    id: 2,
    title: 'Matrix',
    roadmap: 'Insinyur',
    status: 'published',
  },
  {
    id: 3,
    title: 'Biologi',
    roadmap: 'Dokter',
    status: 'published',
  },
];

// const TableItem = [
//   {
//     no: 1,
//     tittle: 'Kompetensi Kepribadian',
//     profesi: 'Guru',
//     status: 'Draft',
//     action: (
//       <Flex>
//         <Button mr={10} bgColor={'white'} color={'teal.300'}>
//           Edit
//         </Button>
//         <Button bgColor={'white'} color={'red'}>
//           Delete
//         </Button>
//       </Flex>
//     ),
//   },
//   {
//     no: 2,
//     tittle: 'Kompetensi Profesional',
//     profesi: 'Guru',
//     status: 'Draft',
//     action: (
//       <Flex>
//         <Button mr={10} bgColor={'white'} color={'teal.300'}>
//           Edit
//         </Button>
//         <Button bgColor={'white'} color={'red'}>
//           Delete
//         </Button>
//       </Flex>
//     ),
//   },
//   {
//     no: 3,
//     tittle: 'Kompetensi pedagogik',
//     profesi: 'Guru',
//     status: 'Draft',
//     action: (
//       <Flex>
//         <Button mr={10} bgColor={'white'} color={'teal.300'}>
//           Edit
//         </Button>
//         <Button bgColor={'white'} color={'red'}>
//           Delete
//         </Button>
//       </Flex>
//     ),
//   },
//   {
//     no: 4,
//     tittle: 'Kompetensi Sosial',
//     profesi: 'Guru',
//     status: 'Draft',
//     action: (
//       <Flex>
//         <Button mr={10} bgColor={'white'} color={'teal.300'}>
//           Edit
//         </Button>
//         <Button bgColor={'white'} color={'red'}>
//           Delete
//         </Button>
//       </Flex>
//     ),
//   },
// ];
