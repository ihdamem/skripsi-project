import {
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcAddImage } from "react-icons/fc";

export default function FormInputFile({ onChange, label }) {
  const [photo, setPhoto] = useState();

  return (
    <Box
      w={"full"}
      minHeight="200px"
      borderWidth="2px"
      borderColor="gray.300"
      borderStyle="dashed"
      position="relative"
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="lg"
      overflow="hidden"
    >
      {photo ? (
        <VStack mb="4">
          <Image src={photo} width="full" objectFit="contain" />
          <Button onClick={() => setPhoto()}>Hapus</Button>
        </VStack>
      ) : (
        <>
          <Box
            width="100%"
            heights="100%"
            display="flex"
            position="absolute"
            top="0"
            left={0}
            right={0}
            bottom={0}
          >
            <HStack
              width="full"
              height="full"
              justifyContent="center"
              align="center"
            >
              <Icon as={FcAddImage} />
              <Text>{label}</Text>
            </HStack>
          </Box>
          <Input
            type="file"
            width="full"
            height="full"
            opacity={0}
            position="absolute"
            top="0"
            left="0"
            cursor="pointer"
            onChange={(e) => {
              const file = URL.createObjectURL(e.target.files[0]);
              setPhoto(file);
              onChange(e);
            }}
          />
        </>
      )}
    </Box>
  );
}
