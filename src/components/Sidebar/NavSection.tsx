import { Box, Stack, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import NavLink from "./NavLink";

interface NavSectionProps {
  title: string;
  children: ReactNode;
}

export default function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text
        fontWeight="bold"
        color="gray.400"
        fontSize="small"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <Stack spacing={4} mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}
