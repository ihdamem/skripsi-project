import {
  FormControl,
  FormLabel,
  Container,
  Heading,
  VStack,
  Textarea,
  Button,
  HStack,
  Box,
  Spinner,
} from "@chakra-ui/react";
import Footer from "../../component/Footer";
import Forminput from "../../component/Forminput";
import { Link as ReactLink, useNavigate, useParams } from "react-router-dom";
import useFormHook from "../../hooks/useFormHook";
import { useState, useLayoutEffect, useEffect } from "react";
import useRoadmapStore from "../../store/roadmapStore";
import uploadImage from "../../services/uploadImageApi";
import { storeRoadmap } from "../../services/roadmapApi";
import FormInputFile from "../../component/FormInputFIle";

/**
 * Halaman Form add profesi
 * Halaman ini digunakan untuk menambahkan jenis profesi
 */
export default function FormAddProfesi() {
  const [roadmap, setRoadmap] = useState();
  const [isLoading, setLoading] = useState(false);
  const { onChange, handleSubmit } = useFormHook();
  const getRoadmap = useRoadmapStore((state) => state.getRoadmap);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const roadmap = getRoadmap(id);
      setRoadmap(roadmap);
    }
  }, [id, getRoadmap]);

  const onSubmit = async (value) => {
    if (roadmap) {
      console.log(value);
    } else {
      setLoading(true);
      const { errorImage, url } = await uploadImage(value.thumbnail);
      if (errorImage) return;
      if (!value.nama && !value.deskripsi) return;
      const { error } = await storeRoadmap({
        title: value.nama,
        description: value.deskripsi,
        thumbnail: url,
      });
      if (error) console.log(error);
      navigate("/dashboard/teacher?view=roadmap");
    }
  };

  return (
    <>
      {isLoading && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          zIndex="20"
          bg="blackAlpha.400"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Spinner size="xl" thickness="4px" />
        </Box>
      )}
      <Container
        maxW={"container.lg"}
        width="full"
        mb="15rem"
        mt="5rem"
        rounded={"lg"}
        bg={"gray.50"}
        boxShadow={"lg"}
        p={8}
      >
        {roadmap ? (
          <Heading>Edit {roadmap.title}</Heading>
        ) : (
          <Heading>Tambah Roadmap</Heading>
        )}
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} mt="1rem" gap={2}>
          <FormInputFile
            label="Add thumbnail"
            onChange={onChange("thumbnail")}
          />
          <Forminput
            id="nama"
            label="Nama"
            type="text"
            onChange={onChange("nama")}
          />
          <FormControl>
            <FormLabel htmlFor="deskripsi">Deskripsi</FormLabel>
            <Textarea
              onChange={onChange("deskripsi")}
              value={roadmap ? roadmap.description : ""}
            />
          </FormControl>
          <HStack w={"full"} justifyContent="space-between">
            <Button variant="ghost" as={ReactLink} to="/dashboard/teacher">
              Kembali
            </Button>
            <Button variant="solid" bg="#36435A" color="white" type="submit">
              Tambah
            </Button>
          </HStack>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
