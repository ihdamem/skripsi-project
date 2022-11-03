import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Spinner,
  Heading,
  Select,
} from "@chakra-ui/react";
import Footer from "../../component/Footer";
import Forminput from "../../component/Forminput";
import useFormHook from "../../hooks/useFormHook";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import useCoursesStore from "../../store/coursesStore";
import useRoadmapStore from "../../store/roadmapStore";
import uploadImage from "../../services/uploadImageApi";
import { storeCourses } from "../../services/coursesApi";
import { useNavigate, useParams } from "react-router-dom";
import FormInputFile from "../../component/FormInputFIle";

/**
 *
 * Halaman add materi
 * Halaman ini bisa di akses dari dashboard, halaman ini digunakan untuk menambahkan materi berdasarkan profesi
 */

export default function FormAddMateri() {
  const [courses, setCourses] = useState();
  const [isLoading, setLoading] = useState(false);
  const [roadmapOption, setRoadmapOption] = useState();
  const { id } = useParams();
  const { quill, quillRef } = useQuill();
  const { onChange, handleSubmit } = useFormHook();
  const getCourses = useCoursesStore((state) => state.getCourses);
  const getAllRoadmapName = useRoadmapStore((state) => state.getAllRoadmapName);
  const navigate = useNavigate();

  const onSubmit = async (value) => {
    setLoading(true);
    const { errorImage, url } = await uploadImage(value.thumbnail);
    if (errorImage) return;
    const { error } = await storeCourses({
      content: quill.root.innerHTML,
      thumbnail: url,
      roadmapId: value.roadmap,
      title: value.title,
    });
    if (error) return;
    navigate("/dashboard/teacher?view=courses");
  };

  useEffect(() => {
    setRoadmapOption(getAllRoadmapName);
    console.log(roadmapOption);
    if (id) {
      setCourses(getCourses(id));
    }
  }, [quill, id, getCourses]);

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
      <Flex
        minH={"100vh"}
        justify={"center"}
        bg={useColorModeValue("white", "gray.700")}
      >
        <Stack mx={"auto"} maxW={"1000px"} w={"100%"} py={8} px={4}>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("gray.50", "gray.800")}
            boxShadow={"lg"}
            p={8}
          >
            {courses ? (
              <Heading>Edit {courses.title}</Heading>
            ) : (
              <Heading>Tambah Roadmap</Heading>
            )}
            <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormInputFile
                id="thumbnail"
                label="Thumbnail"
                //harusnya image ya?
                type="file"
                onChange={onChange("thumbnail")}
              />
              <Forminput
                id="judul"
                label="Judul"
                type="text"
                onChange={onChange("title")}
              />
              {/* <Textarea/> */}
              <FormControl>
                <FormLabel>Pilih profesi</FormLabel>
                <Select placeholder="Profesi" onChange={onChange("roadmap")}>
                  {roadmapOption &&
                    roadmapOption.map((roadmap, i) => (
                      <option value={roadmap.id} key={i}>
                        {roadmap.title}
                      </option>
                    ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Content</FormLabel>
                <div ref={quillRef} />
              </FormControl>
              <Stack spacing={10}>
                <Flex justify={"space-between"}>
                  <Link mr={10} color={"#36435A"} type="submit">
                    Save as draft
                  </Link>
                  <Button
                    bg={"#36435A"}
                    color={"white"}
                    _hover={{
                      bg: "#8C8E93",
                    }}
                    type="submit"
                  >
                    Publish
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Footer />
    </>
  );
}
