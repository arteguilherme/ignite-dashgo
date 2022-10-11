import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Guilherme Camilo</Text>
          <Text color="gray.300" fontSize="small">
            arteguilherme@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Guilherme Camilo"
        src="https://github.com/arteguilherme.png"
      />
    </Flex>
  );
}
